import styles from './style.module.css';
import { PLACES } from '~/data/places';

interface Player {
  author: string;
  pins: number;
}

function makeLeaderboard(places) {
  const authors = [];
  const leaderboard = [];
  for (var i = 0; i < places.length; i++) {
    if (Array.isArray(places[i].author)) {
      for (var j = 0; j < places[i].author.length; j++) {
        authors.push(places[i].author[j]);
      }
    } else {
      authors.push(places[i].author);
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

function getPlural(num: number) {
  if (num === 1) {
    return '';
  } else {
    return 's';
  }
}

function getPositionStyle(num: number) {
  switch (num) {
    case 0:
      return styles.position_first;
    case 1:
      return styles.position_second;
    case 2:
      return styles.position_third;
    default:
      return styles.position;
  }
}

function getPinsStyle(num: number) {
  switch (num) {
    case 0:
    case 1:
    case 2:
      return styles.pins_top;
    default:
      return styles.pins;
  }
}

function getNameStyle(num: number) {
  switch (num) {
    case 0:
    case 1:
    case 2:
      return styles.name_top;
    default:
      return styles.name;
  }
}

export default function Leaderboard() {
  const leaderboard = makeLeaderboard(PLACES);
  leaderboard.sort((a: Player, b: Player) => b.pins - a.pins);
  return (
    <div>
      {leaderboard.map((player: Player, index) => (
        <div key={player.author} className={styles.line}>
          <div className={getPositionStyle(index)}>
            <b>
              {index + 1}
              <sup>{getOrdinals(index)}</sup>
            </b>
          </div>
          <div className={getNameStyle(index)}>{player.author}</div>
          <div className={getPinsStyle(index)}>
            {player.pins} Pin{getPlural(player.pins)}
          </div>
        </div>
      ))}
    </div>
  );
}
