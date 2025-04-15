import { sortByOldest, getDistance } from '~/lib/utils';
import { IPin } from '~/lib/types';
import styles from './style.module.css';
import { User, Player } from './types';

function getSet(arr: User[]): User[] {
  return arr.filter(
    (v, i, a) => a.findIndex((v2) => v2.username === v.username) === i
  );
}

function distance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
}

function deg2rad(deg: number): number {
  return deg * (Math.PI / 180);
}

function groupPins(pins: IPin[], maxDistance: number): IPin[][] {
  const groups: IPin[][] = []; // Array to store groups of pins

  // Determine group for each pin
  for (const pin of pins) {
    let added = false; // Checks if the pin was added to another group

    // Check if the pin belongs to a group
    for (const group of groups) {
      if (
        group.some(
          (p) =>
            distance(
              p.coordinates[0],
              p.coordinates[1],
              pin.coordinates[0],
              pin.coordinates[1]
            ) <= maxDistance
        )
      ) {
        group.push(pin); // Add pin to the group
        added = true;
        break;
      }
    }
    // If the pin isn't part of any group, create a new one
    if (!added) {
      groups.push([pin]);
    }
  }

  return groups;
}

export function makeLeaderboard(places: IPin[], type: string): Player[] {
  const users: User[] = [];
  const leaderboard: Player[] = [];
  const sortedPlaces = places.slice().sort(sortByOldest);

  // Populate users array
  for (const place of sortedPlaces) {
    // More than one person
    if (Array.isArray(place.username) && Array.isArray(place.author)) {
      for (let j = 0; j < place.username.length; j++) {
        users.push({
          author: place.author[j],
          username: place.username[j],
          coordinates: place.coordinates
        });
      }
      // If there is just one person and its username is a string
    } else if (
      typeof place.username === 'string' &&
      typeof place.author === 'string'
    ) {
      users.push({
        author: place.author,
        username: place.username,
        coordinates: place.coordinates
      });
      // Invalid username
    } else {
      console.error('Unexpected type for username or author:', place);
    }
  }

  // Guarantee that users don't appear more than once in leaderboard
  const userSet = getSet(users);

  // Gives each user the respective pins and total distance
  for (const user of userSet) {
    let acc = 0;

    // Logic to get the pins
    const userPins = sortedPlaces.filter((place) => {
      const usernames = Array.isArray(place.username)
        ? place.username.map((u) => u.trim().toLowerCase())
        : [place.username.trim().toLowerCase()];
      return usernames.includes(user.username.trim().toLowerCase());
    });

    switch (type) {
      case 'Pins': {
        acc = userPins.length;
        break;
      }
      case 'Distance': {
        // Group pins that are close together
        const groups = groupPins(userPins, 130);

        // Calculates max distance within group
        acc = groups.reduce((totalDistance, group) => {
          if (group.length > 1) {
            // For groups with multiple pins, calculate max distance
            const groupMaxDistance = group.reduce(
              (maxDistance, pin) =>
                Math.max(maxDistance, getDistance(pin.coordinates)),
              0
            );
            return totalDistance + groupMaxDistance;
          } else {
            // For isolated pins, just add their distance
            return totalDistance + getDistance(group[0].coordinates);
          }
        }, 0);
        break;
      }
    }

    leaderboard.push({
      author: user.author,
      username: user.username,
      value: acc
    });
  }

  // Sort leaderboard by value in descending order
  return leaderboard.sort((a, b) => b.value - a.value);
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
