import Image from 'next/image';
import {
  getFullDateString,
  getRelativeTimeString,
  getNameString
} from '~/lib/utils';
import styles from './styles.module.css';
import { useMemo } from 'react';

const Location = ({ type, city, country, author, date }) => {
  const name = useMemo(() => getNameString(author), [author]);
  return (
    <div className={styles.listings}>
      <div className={styles.marker}>
        <Image
          src={`/images/markers/${type}-image.png`}
          alt="Marker"
          title={type}
          width={70}
          height={70}
        />
      </div>
      <div className={styles.text}>
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

export default Location;
