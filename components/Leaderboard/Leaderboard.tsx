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

  function sortLeaderboard(leaderKey) {
    return makeLeaderboard(PLACES, leaderKey).sort((a, b) => {
      return b.value - a.value;
    });
  }

  const sortedLeaderboard = useMemo(
    () => sortLeaderboard(leaderKey),
    [leaderKey]
  );

  const getIcon = () => {
    if (leaderKey === ELeaderKeys.Pins) {
      return <i className="bi bi-pin-fill"></i>;
    }
    return <i className="bi bi-signpost-fill"></i>;
  };

  const getValue = (player: Player) => {
    if (leaderKey === ELeaderKeys.Distance) {
      return Math.round(player.value) + ' km';
    }
    return player.value;
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
          <div
            className={styles.leading_info}
            title="Distance values are calculated by summing the distance to the CeSIUM headquarters of all the pins from each author"
          >
            <i className="bi bi-info-circle-fill"></i>
          </div>
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
              title={'Go to ' + player.author + "'s GitHub"}
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
              {getValue(player)} {getIcon()}
            </div>
          </div>
          <div className={styles.progress}>
            <div
              className={getBarStyle(index)}
              style={{ width: getWidth(index, sortedLeaderboard) }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
