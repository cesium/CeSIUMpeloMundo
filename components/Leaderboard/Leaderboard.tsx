import styles from './style.module.css';
import { PLACES } from '~/data/places';
import { sortByOldest } from '~/lib/utils';

interface Player {
  author: string;
  pins: number;
}

function makeLeaderboard(places) {
  const authors = [];
  const leaderboard = [];

  const sortedPlaces = places.sort(sortByOldest);

  for (var i = 0; i < sortedPlaces.length; i++) {
    if (Array.isArray(sortedPlaces[i].author)) {
      for (var j = 0; j < sortedPlaces[i].author.length; j++) {
        authors.push(sortedPlaces[i].author[j]);
      }
    } else {
      authors.push(sortedPlaces[i].author);
    }
  }
  const authorsSet = [...new Set(authors)];
  for (var i = 0; i < authorsSet.length; i++) {
    var acc = 0;
    for (var j = i; j < authors.length; j++) {
      if (authorsSet[i] === authors[j]) {
        acc++;
      }
    }
    leaderboard.push({ author: authorsSet[i], pins: acc });
  }
  return leaderboard;
}

function getOrdinals(num: number) {
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

function getBarStyle(num: number) {
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

function getWidth(index: number, leaderboard: Player[]) {
  const maxPins = leaderboard[0].pins;
  const pins = leaderboard[index].pins;

  return (pins * 100) / maxPins + '%';
}

export default function Leaderboard() {
  const leaderboard = makeLeaderboard(PLACES);
  leaderboard.sort((a: Player, b: Player) => b.pins - a.pins);
  return (
    <div className={styles.leaderboard}>
      {leaderboard.map((player: Player, index) => (
        <div className={styles.line} key={index}>
          <div className={styles.info}>
            <div className={styles.position}>
              {' '}
              {index + 1}
              {getOrdinals(index)}{' '}
            </div>
            <div className={styles.name}> {player.author} </div>
            <div className={styles.pins}>
              {' '}
              {player.pins} <i className="bi bi-pin-fill"></i>
            </div>
          </div>
          <div className={styles.progress}>
            <div
              className={getBarStyle(index)}
              style={{ width: getWidth(index, leaderboard) }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
