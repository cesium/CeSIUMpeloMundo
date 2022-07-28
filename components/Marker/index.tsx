import { useMemo } from 'react';
import Image from 'next/image';
import { Marker as MarkerContainer, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import {
  getFullDateString,
  getRelativeTimeString,
  getNameString
} from '~/lib/utils';

import styles from './style.module.css';

type PinType = 'sticker' | 'picture' | 'special';

export interface Pin {
  author: string;
  city: string;
  country: string;
  coordinates: [number, number];
  date: string;
  photo: string;
  type?: PinType;
  streetview?: string;
}

const getIcon = (type: PinType): Icon => {
  switch (type) {
    case 'sticker':
    case 'picture':
    case 'special':
      return new Icon({
        iconUrl: `/images/markers/${type}.png`,
        iconSize: [45, 90]
      });
    default:
      throw new Error(`Unknown action: ${type}`);
  }
};

const Marker = ({
  type,
  coordinates,
  city,
  country,
  author,
  photo,
  date
}: Pin) => {
  const icon = getIcon(type);
  const name = useMemo(() => getNameString(author), [author]);

  return (
    <MarkerContainer
      icon={icon}
      position={coordinates}
      title={`${name} at ${city}`}
    >
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
            <span>{name}</span>
          </div>
          <Image
            alt={`${name} at ${city}`}
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
