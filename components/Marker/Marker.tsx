import { useState, useMemo, useEffect } from 'react';
import { Marker as MarkerContainer, Popup } from 'react-leaflet';
import { IPin } from '~/lib/types';
import { getRelativeTimeString, getNameString, getDistance } from '~/lib/utils';
import { getIcon, getFullDateString } from './utils';
import AuthorIcon from '../AuthorIcon';
import localStyles from './style.module.css'; 
import 'styles/globals.css'; 
import Image from 'next/image';

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
  const icon = getIcon(type);
  const name = useMemo(() => getNameString(author), [author]);

  const [imageOrientation, setImageOrientation] = useState(orientation || 'vertical');

  useEffect(() => {
    if (!orientation) {
      const img = new window.Image();
      img.src = photo;

      img.onload = () => {
        const calculatedOrientation = img.width > img.height ? 'horizontal' : 'vertical';
        setImageOrientation(calculatedOrientation);
      };
    }
  }, [photo, orientation]);

  const popupClassName = `${localStyles.popup} ${imageOrientation}`;
  const imageClassName = imageOrientation === 'horizontal' ? localStyles.horizontalImage : localStyles.verticalImage;

  return (
    <MarkerContainer
      icon={icon}
      position={coordinates}
      title={`${name} at ${city}`}
    >
      <Popup className={popupClassName}>
        <div className={localStyles.imageContainer}>
          <Image
            alt={`${name} at ${city}`}
            src={photo}
            layout="fill"
            objectFit="cover"
            className={`${localStyles.image} ${imageClassName}`}
          />
          <div className={localStyles.textOverlay}>
            <h1 className={localStyles.title}>
              {city}, {country}
            </h1>
            <span className={localStyles.light}>
              <i className="bi bi-calendar"></i> {getFullDateString(date)} (
              {getRelativeTimeString(date)})
            </span>
            <br />
            <span className={localStyles.light}>
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
