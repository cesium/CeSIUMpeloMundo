import Image from 'next/image';
import { getRelativeTimeString, getNameString } from '~/lib/utils';
import styles from './style.module.css';
import { useMemo } from 'react';

const Location = ({ type, city, country, author, date, coordinates, map, setOpen }) => {
  const name = useMemo(() => getNameString(author), [author]);

  const onClick = () => {
    if (screen.width <= 438) {
      setOpen(false);
    }
    map.flyTo(coordinates, 10);
  }

  return (
    <div className={styles.listings}>
      <div className={styles.marker} onClick={onClick}>
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
