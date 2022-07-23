import Image from 'next/image';
import { Marker as MarkerContainer, Popup } from 'react-leaflet';
import { DateTime } from 'luxon';
import { Icon } from 'leaflet';

import styles from './style.module.css';

const getIcon = (type) => {
  if (type === 'golden') {
    return new Icon({ iconUrl: '/logo-golden.png', iconSize: [30, 30] });
  }

  return new Icon({ iconUrl: '/logo.png', iconSize: [25, 25] });
};

const getFullDateString = (date) => {
  return new Date(date).toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const getRelativeTimeString = (date) => {
  return DateTime.fromISO(date)
    .toRelative(Date.now())
    .toLocaleString(DateTime.DATETIME_MED);
};

const getNameString = (authors) => {
  if (!Array.isArray(authors)) {
    return authors;
  }

  if (authors.length <= 2) {
    return authors.join(' and ');
  }

  return authors.join(', ');
};

const Marker = ({ type, coordinates, city, country, author, photo, date }) => {
  const icon = getIcon(type);

  return (
    <MarkerContainer icon={icon} position={coordinates}>
      <Popup>
        <div>
          <div className={styles.text}>
            <h1>{country}</h1>
            <h2>{city}</h2>
            {date && (
              <i>
                {getFullDateString(date)} ({getRelativeTimeString(date)})
              </i>
            )}
            <br />
            <span>{getNameString(author)}</span>
          </div>
          <Image
            alt={`${getNameString(author)} at ${city}`}
            src={photo}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Popup>
    </MarkerContainer>
  );
};

export default Marker;
