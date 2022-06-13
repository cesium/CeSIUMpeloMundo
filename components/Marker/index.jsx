import Image from 'next/image';
import { Marker as MarkerContainer, Popup } from 'react-leaflet';
import { DateTime } from 'luxon';
import { Icon } from 'leaflet';

import styles from './style.module.css';

const Marker = ({ coordinates, city, country, author, photo, date }) => {
  const icon = new Icon({ iconUrl: '/logo.png', iconSize: [25, 25] });

  return (
    <MarkerContainer icon={icon} position={coordinates}>
      <Popup>
        <div>
          <div className={styles.text}>
            <h1>{country}</h1>
            <h2>{city}</h2>

            <i>
              {date &&
                DateTime.fromISO(date)
                  .toRelative(Date.now())
                  .toLocaleString(DateTime.DATETIME_MED)}
            </i>
            <br />
            <span>{author}</span>
          </div>
          <Image
            alt={`${author} at ${city}`}
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
