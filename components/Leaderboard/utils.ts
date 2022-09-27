import { sortByOldest } from '~/lib/utils';
import { IPin } from '~/lib/types';
import styles from './style.module.css';
import { Player, User } from './types';

export function getSet(arr: User[]) {
  return [...new Map(arr.map((item) => [item['username'], item])).values()];
}

export function makeLeaderboard(places: IPin[]) {
  const users = [];
  const leaderboard = [];
  const places_copy = places.slice();
  const sortedPlaces = places_copy.sort(sortByOldest);

  for (var i = 0; i < sortedPlaces.length; i++) {
    if (Array.isArray(sortedPlaces[i].username)) {
      for (var j = 0; j < sortedPlaces[i].username.length; j++) {
        users.push({
          author: sortedPlaces[i].author[j],
          username: sortedPlaces[i].username[j]
        });
      }
    } else {
      users.push({
        author: sortedPlaces[i].author,
        username: sortedPlaces[i].username
      });
    }
  }

  const usersSet = getSet(users);

  for (var i = 0; i < usersSet.length; i++) {
    var acc = 0;
    for (var j = i; j < users.length; j++) {
      if (usersSet[i].username === users[j].username) {
        acc++;
      }
    }
    leaderboard.push({
      author: usersSet[i].author,
      username: usersSet[i].username,
      pins: acc
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
  const maxPins = leaderboard[0].pins;
  const pins = leaderboard[index].pins;

  return (pins * 100) / maxPins + '%';
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
