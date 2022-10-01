import { sortByOldest } from '~/lib/utils';
import { IPin } from '~/lib/types';
import styles from './style.module.css';
import { Player, User } from './types';
import { getDistance } from '~/lib/utils';

function getSet(arr: User[]) {
  return arr.filter(
    (v, i, a) =>
      a.findIndex((v2) => ['username'].every((k) => v2[k] === v[k])) === i
  );
}

function sortByDistance(a: User, b: User) {
  const d1 = getDistance(a.coordinates);
  const d2 = getDistance(b.coordinates);
  return d2 - d1;
}

export function makeLeaderboard(places: IPin[], type: string) {
  const users = [];
  const leaderboard = [];
  const places_copy = places.slice();
  const sortedPlaces = places_copy.sort(sortByOldest);

  for (var i = 0; i < sortedPlaces.length; i++) {
    if (Array.isArray(sortedPlaces[i].username)) {
      for (var j = 0; j < sortedPlaces[i].username.length; j++) {
        users.push({
          author: sortedPlaces[i].author[j],
          username: sortedPlaces[i].username[j],
          coordinates: sortedPlaces[i].coordinates
        });
      }
    } else {
      users.push({
        author: sortedPlaces[i].author,
        username: sortedPlaces[i].username,
        coordinates: sortedPlaces[i].coordinates
      });
    }
  }

  const userSet = getSet(users);

  for (var i = 0; i < userSet.length; i++) {
    var acc = 0;

    switch (type) {
      case 'Pins': {
        for (var j = 0; j < users.length; j++) {
          if (userSet[i].username === users[j].username) {
            acc++;
          }
        }
        break;
      }
      case 'Distance': {
        for (var j = 0; j < users.length; j++) {
          if (userSet[i].username === users[j].username) {
            acc += getDistance(users[j].coordinates);
          }
        }
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

  var acc = 0;
  for (var i = 0; i < leaderboard.length; i++) {
    if (leaderboard[i].author === author) {
      acc++;
    }
  }

  if (acc > 1) {
    return '@' + leaderboard[index].username;
  }
  return '';
}
