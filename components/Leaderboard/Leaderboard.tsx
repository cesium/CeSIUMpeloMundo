import styles from './style.module.css';
import { PLACES } from '~/data/places';
import {
  makeLeaderboard,
  getOrdinals,
  getUsername,
  getBarStyle,
  getWidth
} from './utils';
import { Player } from './types';

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
            <a
              className={styles.name}
              href={'https://github.com/' + player.username}
            >
              {' '}
              {player.author}{' '}
              <div className={styles.username}>
                {' '}
                {getUsername(index, leaderboard)}{' '}
              </div>
            </a>
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
