import { useState, useMemo} from 'react';
import { Marker as MarkerContainer, Popup } from 'react-leaflet';
import { IPin } from '~/lib/types';
import { getRelativeTimeString, getNameString, getDistance } from '~/lib/utils';
import { getIcon, getFullDateString } from './utils';
import AuthorIcon from '../AuthorIcon';
import Image from 'next/image';
import styles from './style.module.css';

const Marker = ({
  type,
  coordinates,
  city,
  country,
  author,
  photo,
  date,
  orientation,
}: IPin) => {
  const [imageOrientation, setImageOrientation] = useState(orientation || 'vertical');
  const icon = getIcon(type);
  const name = useMemo(() => getNameString(author), [author]);



  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.target as HTMLImageElement;
    setImageOrientation(
      img.naturalWidth > img.naturalHeight ? 'horizontal' : 'vertical'  
    );                                                               
  };
  

  const popupClassName = `${styles.popup} ${
    imageOrientation === 'horizontal' ? 'horizontal' : 'vertical'
  }`;

  return (
    <MarkerContainer
      icon={icon}
      position={coordinates}
      title={`${name} at ${city}`}
    >
      <Popup className={popupClassName}>
        <div className={styles.imageContainer}>
          <Image
            alt={`${name} at ${city}`}
            src={photo}
            layout="fill"
            objectFit="cover"
            className={`${styles.image} ${styles[imageOrientation]}`}
          />
          <div className={styles.textOverlay}>
            <h1 className={styles.title}>
              {city}, {country}
            </h1>
            <span className={styles.light}>
              <i className="bi bi-calendar"></i> {getFullDateString(date)} (
              {getRelativeTimeString(date)})
            </span>
            <br />
            <span className={styles.light}>
              <i className="bi bi-signpost-fill"></i>{' '}
              {Math.round(getDistance(coordinates))} km away
            </span>
            <br />
            <span>
              <AuthorIcon author={author} /> {name}
            </span>
          </div>
        </div>
      </Popup>
    </MarkerContainer>
  );
};

export default Marker;
