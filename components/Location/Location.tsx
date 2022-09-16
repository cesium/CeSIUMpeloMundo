import Image from 'next/image';
import { getRelativeTimeString, getNameString } from '~/lib/utils';
import styles from './style.module.css';
import { useMemo } from 'react';

const Location = ({ type, city, country, author, date, coordinates, map }) => {
  const name = useMemo(() => getNameString(author), [author]);

  return (
    <div className={styles.listings}>
      <div className={styles.marker} onClick={() => map.flyTo(coordinates, 10)}>
        <Image
          src={`/images/markers/${type}-image.png`}
          alt="Marker"
          title="Go to pin"
          width={70}
          height={70}
        />
      </div>
      <div className={styles.text}>
        <p className={styles.paragraph}>
          <b
            className={styles.title}
            onClick={() => map.flyTo(coordinates, 10)}
            title="Go to pin"
          >
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
