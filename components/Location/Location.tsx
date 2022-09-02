import Image from 'next/image';
import {
  getFullDateString,
  getRelativeTimeString,
  getNameString
} from '~/lib/utils';
import styles from './style.module.css';
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
        <p className={styles.paragraph}>
          <b className={styles.title}>
            {city}, {country}
          </b>
        </p>
        <p className={styles.paragraph}>
          {date && <i>{getRelativeTimeString(date)}</i>}
        </p>
        <p className={styles.paragraph}>
          <span className={styles.authors}>{name}</span>
        </p>
      </div>
    </div>
  );
};

export default Location;
