import Image from 'next/image';
import { Marker as MarkerContainer, Popup } from 'react-leaflet';
import { DateTime } from 'luxon';
import { Icon } from 'leaflet';

import styles from './style.module.css';

const getIcon = (type) => {
  switch (type) {
    case 'sticker':
      return new Icon({
        iconUrl: '/images/markers/sticker.png',
        iconSize: [40, 80]
      });
    case 'picture':
      return new Icon({
        iconUrl: '/images/markers/picture.png',
        iconSize: [40, 80]
      });
    case 'special':
      return new Icon({
        iconUrl: '/images/markers/special.png',
        iconSize: [40, 80]
      });
    default:
      return new Icon({
        iconUrl: '/images/markers/sticker.png',
        iconSize: [40, 80]
      });
  }
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
            <h1>
              {city},<br />
              {country}
            </h1>
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
            style={{ borderRadius: '10px', overflow: 'hidden' }}
          />
        </div>
      </Popup>
    </MarkerContainer>
  );
};

export default Marker;
