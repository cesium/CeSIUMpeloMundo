import styles from './style.module.css';
import { sortByDistance } from '~/lib/utils';
import Image from 'next/image';
import type { IPin } from '~/lib/types';
import Location from '../Location';

export default function Sidebar({ pins }: { pins: IPin[] }) {
  pins.sort(sortByDistance);
  return (
    <div className={styles.list}>
      <div className={styles.heading}>
        <Image
          src="/images/cesium.png"
          alt="CeSIUM Logo"
          width={180}
          height={61}
        />
        <br></br>
        <div className={styles.buttons}>
          <button className={styles.button} type={'button'} role="button">
            {' '}
            Locations{' '}
          </button>
          &nbsp;
          <button className={styles.button} type={'button'} role="button">
            {' '}
            Leaderboard{' '}
          </button>
        </div>
      </div>
      <div id="locations_list">
        {pins.map((pin: IPin) => (
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
