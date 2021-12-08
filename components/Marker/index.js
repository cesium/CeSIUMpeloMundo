import Image from 'next/image';
import { Marker as MarkerContainer, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

import styles from './style.module.css';

const Marker = ({ coordinates, city, author, photo }) => {
  const icon = new Icon({
    iconUrl: '/logo.png',
    iconSize: [25, 25],
    iconAnchor: [12, 41]
  });

  return (
    <MarkerContainer icon={icon} position={coordinates}>
      <Popup>
        <div>
          <h1>{city}</h1>
          <i>{author}</i>
          <br />
          <Image
            className={styles.photo}
            alt={`${author} at ${city}`}
            src={photo}
          />
        </div>
      </Popup>
    </MarkerContainer>
  );
};

export default Marker;
