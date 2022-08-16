import styles from './style.module.css';
import {
  getFullDateString,
  getRelativeTimeString,
  getNameString,
  sortByDistance
} from '~/lib/utils';
import { useMemo } from 'react';
import Image from 'next/image';

type PinType = 'sticker' | 'picture' | 'special';

export interface Pin {
  author: string;
  city: string;
  country: string;
  coordinates: [number, number];
  date: string;
  photo: string;
  type?: PinType;
  streetview?: string;
}

const Location = ({
  type,
  coordinates,
  city,
  country,
  author,
  photo,
  date
}: Pin) => {
  const name = useMemo(() => getNameString(author), [author]);
  return (
    <div className={styles.listings}>
      <Image
        src={`/images/markers/${type}-image.png`}
        alt="Marker"
        width={50}
        height={50}
        style={{ float: 'left' }}
      />
      <div style={{ display: 'inline-block', paddingLeft: '10px' }}>
        <b>
          {' '}
          {city}, {country}{' '}
        </b>
        <br></br>
        {date && (
          <i>
            {getFullDateString(date)} ({getRelativeTimeString(date)})
          </i>
        )}
        <br />
        <span>{name}</span>
      </div>
    </div>
  );
};

const When = ({ children, condition }) => {
  const shouldRender =
    typeof condition === 'function' ? condition() : !!condition;

  if (!shouldRender) return null;

  return children;
};

var showLocationList = true;
var showLeaderboard = false;

export default function Sidebar({ pins }: { pins: Pin[] }) {
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
      <div>
        <When condition={showLocationList}>
          {pins.map((pin: Pin) => (
            <Location key={`${pin.coordinates}-${pin.author}`} {...pin} />
          ))}
        </When>
      </div>
    </div>
  );
}
