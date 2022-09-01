import styles from './style.module.css';
import {
  sortByLatest,
  sortByOldest,
  sortByDistance,
  byLatest,
  byOldest,
  byDistance
} from '~/lib/utils';
import Image from 'next/image';
import type { IPin } from '~/lib/types';
import Location from '../Location';

export default function Sidebar({ pins }: { pins: IPin[] }) {
  return (
    <div>
      <div className={styles.heading}>
        <Image
          src="/images/cesium.png"
          alt="CeSIUM Logo"
          width={180}
          height={61}
        />
        <br></br>
        <div className={styles.buttons}>
          {/*} - FOR FUTURE IMPLEMENTATION OF THE LEADERBOARD -
          <button className={styles.button} type={'button'} role="button">
            {' '}
            Locations{' '}
          </button>
          &nbsp;
          <button className={styles.button} type={'button'} role="button">
            {' '}
            Leaderboard{' '}
          </button>
          <br></br>
          */}
          <div style={{ paddingTop: '5px' }}>
            <label>
              <b>Sort by: </b>
            </label>
            <select className={styles.button}>
              <option value="latest" onClick={byLatest}>
                Latest
              </option>
              <option value="oldest" onClick={byOldest}>
                Oldest
              </option>
              <option value="distance" onClick={byDistance}>
                Distance
              </option>
            </select>
          </div>
        </div>
      </div>
      <div id="latest" style={{ display: 'block' }}>
        {pins.sort(sortByLatest).map((pin: IPin) => (
          <Location
            type={pin.type}
            city={pin.city}
            country={pin.country}
            author={pin.author}
            date={pin.date}
            key={null}
          />
        ))}
      </div>
      <div id="oldest" style={{ display: 'none' }}>
        {pins.sort(sortByOldest).map((pin: IPin) => (
          <Location
            type={pin.type}
            city={pin.city}
            country={pin.country}
            author={pin.author}
            date={pin.date}
            key={null}
          />
        ))}
      </div>
      <div id="distance" style={{ display: 'none' }}>
        {pins.sort(sortByDistance).map((pin: IPin) => (
          <Location
            type={pin.type}
            city={pin.city}
            country={pin.country}
            author={pin.author}
            date={pin.date}
            key={null}
          />
        ))}
      </div>
    </div>
  );
}
