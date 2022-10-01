import { useMemo } from 'react';
import Image from 'next/image';
import { Marker as MarkerContainer, Popup } from 'react-leaflet';
import { IPin } from '~/lib/types';
import { getRelativeTimeString, getNameString } from '~/lib/utils';
import { getIcon, getFullDateString } from './utils';

import styles from './style.module.css';

const Marker = ({
  type,
  coordinates,
  city,
  country,
  author,
  photo,
  date
}: IPin) => {
  const icon = getIcon(type);

  const name = useMemo(() => getNameString(author), [author]);

  function getAuthorIcon() {
    if (Array.isArray(author)) {
      return <i className="bi bi-people-fill"></i>;
    }
    return <i className="bi bi-person-fill"></i>;
  }

  return (
    <MarkerContainer
      icon={icon}
      position={coordinates}
      title={`${name} at ${city}`}
    >
      <Popup>
        <div>
          <div className={styles.background}>
            <div className={styles.text}>
              <h1 style={{ lineHeight: '1.2' }}>
                {city},<br />
                {country}
              </h1>
              <span style={{ fontWeight: '400' }}>
                <i className="bi bi-calendar"></i> {getFullDateString(date)} (
                {getRelativeTimeString(date)})
              </span>
              <br />
              <span>
                {getAuthorIcon()} {name}
              </span>
            </div>
          </div>
          <Image
            alt={`${name} at ${city}`}
            src={photo}
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: '10px', overflow: 'hidden', zIndex: '0' }}
          />
        </div>
      </Popup>
    </MarkerContainer>
  );
};

export default Marker;
