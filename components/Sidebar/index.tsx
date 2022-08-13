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
  );
};

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
      </div>
      <div>
        {pins.map((pin: Pin) => (
          <Location key={`${pin.coordinates}-${pin.author}`} {...pin} />
        ))}
      </div>
    </div>
  );
}
