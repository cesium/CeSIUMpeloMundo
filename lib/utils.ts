import { DateTime } from 'luxon';
import { IPin } from '~/lib/types';

// Função para calcular distância entre duas coordenadas
export function distance(lat1, lat2, lon1, lon2) {
  lon1 = (lon1 * Math.PI) / 180;
  lon2 = (lon2 * Math.PI) / 180;
  lat1 = (lat1 * Math.PI) / 180;
  lat2 = (lat2 * Math.PI) / 180;

  let dlon = lon2 - lon1;
  let dlat = lat2 - lat1;
  let a =
    Math.pow(Math.sin(dlat / 2), 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);

  let c = 2 * Math.asin(Math.sqrt(a));
  let r = 6371;

  return c * r;
}

function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

// Função para calcular a distância entre dois pins em quilômetros
export function calculateDistanceBetweenPins(
  pin1: { coordinates?: [number, number] },
  pin2: { coordinates?: [number, number] }
): number | null {
  // Verifica se as coordenadas de ambos os pins estão definidas
  if (!pin1.coordinates || !pin2.coordinates) {
    console.error('As coordenadas dos pins estão indefinidas.');
    return null; // ou pode retornar um valor padrão, como 0
  }

  const R = 6371; // Raio médio da Terra em quilômetros

  const lat1 = pin1.coordinates[0];
  const lon1 = pin1.coordinates[1];
  const lat2 = pin2.coordinates[0];
  const lon2 = pin2.coordinates[1];

  // Converte coordenadas de graus para radianos
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Retorna a distância em quilômetros
}

export function getDistance(coordinates: IPin['coordinates']) {
  const x0 = 41.56157392223945;
  const y0 = -8.397397824887639;
  const x1 = coordinates[0];
  const y1 = coordinates[1];

  return distance(x0, x1, y0, y1);
}

// Verificar se dois pins estão a menos de 100 km e em um intervalo de 30 dias
export function isWithinRadiusAndTime(pin1: IPin, pin2: IPin): boolean {
  const maxDistance = 100; // km
  const maxDays = 30; // dias

  // Função auxiliar para verificar se os usuários são os mesmos ou se há sobreposição
  const isSameUser = (user1: string | string[], user2: string | string[]) => {
    if (Array.isArray(user1) && Array.isArray(user2)) {
      return user1.some((u1) => user2.includes(u1));
    } else if (Array.isArray(user1)) {
      return user1.includes(user2 as string);
    } else if (Array.isArray(user2)) {
      return user2.includes(user1 as string);
    } else {
      return user1 === user2;
    }
  };

  // Verifica se os usuários são os mesmos ou se há sobreposição
  const sameUser = isSameUser(pin1.username, pin2.username);

  // Se não forem do mesmo usuário ou não houver sobreposição de usuários, retorna false
  if (!sameUser) {
    return false;
  }

  // Calcula a distância entre os pins
  const distanceBetweenPins = distance(
    pin1.coordinates[0],
    pin2.coordinates[0], // Latitude
    pin1.coordinates[1],
    pin2.coordinates[1] // Longitude
  );

  // Calcula a diferença de dias entre as datas dos pins
  const date1 = DateTime.fromISO(pin1.date);
  const date2 = DateTime.fromISO(pin2.date);
  const daysBetweenPins = Math.abs(date1.diff(date2, 'days').days);

  // Retorna true apenas se a distância for menor que o limite e os dias também forem menores que o limite
  return distanceBetweenPins <= maxDistance && daysBetweenPins <= maxDays;
}

// Função para criar a leaderboard
export function makeLeaderboard(places: IPin[], type: string) {
  const users = [];
  const leaderboard = [];
  const places_copy = places.slice();
  const sortedPlaces = places_copy.sort(sortByOldest);

  // Objeto para manter os stats de cada usuário
  const userStats: {
    [username: string]: {
      pins: number;
      totalDistance: number;
      previousPins: IPin[];
    };
  } = {};

  for (let i = 0; i < sortedPlaces.length; i++) {
    const currentPlace = sortedPlaces[i];
    const username = currentPlace.username;

    // Verifica se username é válido
    if (username && typeof username === 'string') {
      if (!userStats[username]) {
        userStats[username] = { pins: 0, totalDistance: 0, previousPins: [] };
        users.push({
          author: currentPlace.author,
          username: username,
          coordinates: currentPlace.coordinates,
          date: currentPlace.date
        });
      }

      let isNearby = false;

      // Verifica se algum pin anterior do mesmo usuário está próximo e dentro do tempo permitido
      for (let j = 0; j < userStats[username].previousPins.length; j++) {
        const previousPin = userStats[username].previousPins[j];
        if (isWithinRadiusAndTime(previousPin, currentPlace)) {
          isNearby = true;
          break;
        }
      }

      // Se estiver dentro do raio e tempo, adiciona apenas o pin
      if (isNearby) {
        userStats[username].pins += 1;
      } else {
        // Caso contrário, adiciona o pin e a distância
        if (userStats[username].previousPins.length > 0) {
          const lastPin =
            userStats[username].previousPins[
              userStats[username].previousPins.length - 1
            ];
          const distanceBetweenPins = getDistance(currentPlace.coordinates);
          userStats[username].totalDistance += distanceBetweenPins;
        }
        userStats[username].pins += 1;
        userStats[username].previousPins.push(currentPlace); // Adiciona o pin atual à lista de pins anteriores
      }
    }
  }

  // Criar o leaderboard com base no tipo selecionado
  for (let i = 0; i < users.length; i++) {
    const username = users[i].username;
    let acc = 0;

    switch (type) {
      case 'Pins': {
        acc = userStats[username].pins;
        break;
      }
      case 'Distance': {
        acc = userStats[username].totalDistance;
        break;
      }
    }

    leaderboard.push({
      author: users[i].author,
      username: users[i].username,
      value: acc
    });
  }

  return leaderboard;
}

// Funções auxiliares

export const getRelativeTimeString = (date: string) => {
  return DateTime.fromISO(date)
    .toRelative(Date.now())
    .toLocaleString(DateTime.DATETIME_MED);
};

export const getNameString = (authors: string[] | string) => {
  if (!Array.isArray(authors)) {
    return authors;
  }

  const size = authors.length;

  if (size <= 1) {
    return authors.join();
  }

  if (size <= 3) {
    return authors.slice(0, size - 1).join(', ') + ' and ' + authors[size - 1];
  }

  return authors.slice(0, 2).join(', ') + ' and ' + (size - 2) + ' others';
};

export const sortByOldest = (a: IPin, b: IPin) => {
  return (
    DateTime.fromISO(a.date).toMillis() - DateTime.fromISO(b.date).toMillis()
  );
};
