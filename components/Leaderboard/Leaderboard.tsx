import styles from './style.module.css';
import { PLACES } from '~/data/places';
import {
  makeLeaderboard,
  getOrdinals,
  getUsername,
  getBarStyle,
  getWidth
} from './utils';
import { Player, ELeaderKeys } from './types';
import { useState, useMemo } from 'react';

export default function Leaderboard() {
  const [leaderKey, setLeaderKey] = useState<ELeaderKeys>(ELeaderKeys.Pins);

  function sortLeaderboard() {
    return makeLeaderboard(PLACES, leaderKey).sort((a, b) => {
      if (leaderKey === ELeaderKeys.Pins) {
        return b.pins - a.pins;
      }
      return b.distance - a.distance;
    });
  }

  const sortedLeaderboard = useMemo(() => sortLeaderboard(), [leaderKey]);

  const getIcon = () => {
    if (leaderKey === ELeaderKeys.Pins) {
      return <i className="bi bi-pin-fill"></i>;
    }
    return <i className="bi bi-signpost-fill"></i>;
  };

  const getNumber = (player: Player) => {
    if (leaderKey === ELeaderKeys.Pins) {
      return player.pins;
    }
    return Math.round(player.distance) + ' km';
  };

  return (
    <div className={styles.leaderboard}>
      <div className={styles.sort}>
        <div className={styles.sort_back}>
          <label>
            <b>Leading by: </b>
          </label>
          <select
            onChange={(e) => setLeaderKey(e.target.value as ELeaderKeys)}
            className={styles.sort_button}
          >
            <option>Pins</option>
            <option>Distance</option>
          </select>
        </div>
      </div>
      {sortedLeaderboard.map((player: Player, index) => (
        <div className={styles.line} key={index}>
          <div className={styles.info}>
            <div className={styles.position}>
              {' '}
              {index + 1}
              {getOrdinals(index)}{' '}
            </div>
            <a
              className={styles.name}
              href={'https://github.com/' + player.username}
            >
              {' '}
              {player.author}{' '}
              <div className={styles.username}>
                {' '}
                {getUsername(index, sortedLeaderboard)}{' '}
              </div>
            </a>
            <div className={styles.number}>
              {' '}
              {getNumber(player)} {getIcon()}
            </div>
          </div>
          <div className={styles.progress}>
            <div
              className={getBarStyle(index)}
              style={{ width: getWidth(index, sortedLeaderboard, leaderKey) }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
