import {
  calculateDistanceBetweenPins,
  getDistance,
  isWithinRadiusAndTime
} from '~/lib/utils';
import { sortByOldest } from '~/lib/utils';
import { IPin } from '~/lib/types';
import styles from './style.module.css';
import { Player, User } from './types';

// Função para remover duplicatas com base no 'username'
function getSet(arr: User[]) {
  return arr.filter(
    (v, i, a) =>
      a.findIndex((v2) => ['username'].every((k) => v2[k] === v[k])) === i
  );
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

  // Processa os places e popula o array de usuários
  for (let i = 0; i < sortedPlaces.length; i++) {
    if (Array.isArray(sortedPlaces[i].username)) {
      for (let j = 0; j < sortedPlaces[i].username.length; j++) {
        users.push({
          author: sortedPlaces[i].author[j],
          username: sortedPlaces[i].username[j],
          coordinates: sortedPlaces[i].coordinates,
          date: sortedPlaces[i].date
        });
      }
    } else {
      users.push({
        author: sortedPlaces[i].author,
        username: sortedPlaces[i].username,
        coordinates: sortedPlaces[i].coordinates,
        date: sortedPlaces[i].date
      });
    }
  }

  // Gera um conjunto único de usuários
  const userSet = getSet(users);

  // Para cada usuário, calcula o total de pins e a distância, levando em consideração proximidade e tempo
  for (let i = 0; i < userSet.length; i++) {
    const username = userSet[i].username;

    if (!userStats[username]) {
      userStats[username] = { pins: 0, totalDistance: 0, previousPins: [] };
    }

    for (let j = 0; j < users.length; j++) {
      if (userSet[i].username === users[j].username) {
        let isNearby = false;

        // Verifica se o pin atual está dentro do raio e intervalo de tempo de algum pin anterior do mesmo usuário
        for (let k = 0; k < userStats[username].previousPins.length; k++) {
          const previousPin = userStats[username].previousPins[k];
          if (isWithinRadiusAndTime(previousPin, users[j])) {
            isNearby = true;
            break;
          }
        }

        // Se houver proximidade e o pin for do mesmo usuário em um intervalo de tempo permitido, não adiciona distância
        if (isNearby) {
          userStats[username].pins += 1;
        } else {
          // Adiciona a distância se não houver proximidade com outros pins do mesmo usuário dentro do tempo
          if (userStats[username].previousPins.length > 0) {
            const lastPin =
              userStats[username].previousPins[
                userStats[username].previousPins.length - 1
              ];
            const distanceBetweenPins =
              calculateDistanceBetweenPins(users[j], lastPin) || 0;
            if (
              distanceBetweenPins < 100 &&
              getDistance(users[j].coordinates) <
                getDistance(lastPin.coordinates)
            ) {
              userStats[username].totalDistance += getDistance(
                lastPin.coordinates
              );
            } else {
              userStats[username].totalDistance += getDistance(
                users[j].coordinates
              );
            }
          }
          userStats[username].pins += 1;
          userStats[username].previousPins.push(users[j]); // Adiciona o pin atual à lista de pins anteriores
        }
      }
    }
  }

  // Cria o leaderboard com base no tipo selecionado
  for (let i = 0; i < userSet.length; i++) {
    const username = userSet[i].username;
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
      author: userSet[i].author,
      username: userSet[i].username,
      value: acc
    });
  }

  return leaderboard;
}

export function getOrdinals(num: number) {
  switch (num) {
    case 0:
      return 'st';
    case 1:
      return 'nd';
    case 2:
      return 'rd';
    default:
      return 'th';
  }
}

export function getBarStyle(num: number) {
  switch (num) {
    case 0:
      return styles.bar_first;
    case 1:
      return styles.bar_second;
    case 2:
      return styles.bar_third;
    default:
      return styles.bar;
  }
}

export function getWidth(index: number, leaderboard: Player[]) {
  const maxValue = leaderboard[0].value;
  const value = leaderboard[index].value;

  return (value * 100) / maxValue + '%';
}

export function getUsername(index: number, leaderboard: Player[]) {
  const author = leaderboard[index].author;

  let acc = 0;
  for (let i = 0; i < leaderboard.length; i++) {
    if (leaderboard[i].author === author) {
      acc++;
    }
  }

  if (acc > 1) {
    return '@' + leaderboard[index].username;
  }
  return '';
}

//TODO: Just need to get the distance good for some cases
//TODO: Like are some cases where people dosent get some distance
//TODO: o problema é quando não há outros pins perto uns dos outros não conta a distancia por alguma razao
