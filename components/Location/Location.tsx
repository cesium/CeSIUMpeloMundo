import Image from 'next/image';
import { getRelativeTimeString, getNameString, getDistance } from '~/lib/utils';
import styles from './style.module.css';
import { useMemo } from 'react';

const Location = ({
  type,
  city,
  country,
  author,
  date,
  coordinates,
  map,
  setOpen,
  sortKey
}) => {
  const name = useMemo(() => getNameString(author), [author]);

  const onClick = () => {
    if (screen.width <= 438) {
      setOpen(false);
    }
    map.flyTo(coordinates, 10);
  };

  const getItalic = () => {
    if (sortKey === 'Date') {
      return getRelativeTimeString(date);
    }
    return Math.round(getDistance(coordinates)) + ' km away';
  };

  const getIcon = () => {
    if (sortKey === 'Distance') {
      return <i className="bi bi-signpost-fill"></i>;
    }
    return <i className="bi bi-clock"></i>;
  };

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
          <b className={styles.title} onClick={onClick} title="Go to pin">
            {city}, {country}
          </b>
        </p>
        <p className={styles.paragraph}>
          <i>
            {getIcon()} {getItalic()}
          </i>
        </p>
        <p className={styles.paragraph}>
          <span className={styles.authors}>
            <i className="bi bi-person-fill"></i> {name}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Location;
