import Image from 'next/image';
import { getRelativeTimeString, getNameString, distance } from '~/lib/utils';
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
    const x0 = 41.56157392223945;
    const y0 = -8.397397824887639;

    return (
      Math.round(distance(x0, coordinates[0], y0, coordinates[1])) + ' km away'
    );
  };

  const getIcon = () => {
    if (sortKey === 'Distance') {
      return <i className="bi bi-signpost-fill"></i>;
    }
    return <i className="bi bi-hourglass-split"></i>;
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
          <span className={styles.authors}>{name}</span>
        </p>
      </div>
    </div>
  );
};

export default Location;
