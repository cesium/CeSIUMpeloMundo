import { useState, useMemo, useEffect } from 'react';
import { Marker as MarkerContainer, Popup } from 'react-leaflet';
import { IPin } from '~/lib/types';
import { getRelativeTimeString, getNameString, getDistance } from '~/lib/utils';
import { getIcon, getFullDateString } from './utils';
import AuthorIcon from '../AuthorIcon';
import localStyles from './style.module.css'; 
import 'styles/globals.css'; 
import Image from 'next/future/image';

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
    if (!orientation && photo) {
      const img = new window.Image();
      img.src = photo;

      img.onload = () => {
        const calculatedOrientation = img.width > img.height ? 'horizontal' : 'vertical';
        setImageOrientation(calculatedOrientation);
      };

      img.onerror = () => {
        console.error('Failed to load image:', photo);
        setImageOrientation('vertical');
      };
    }
  }, [photo, orientation]);

  const popupClassName = imageOrientation === 'horizontal' ? '651:400' : '301:470';

  const [width, height] = popupClassName.split(':').map(Number);

  return (
    <MarkerContainer
      icon={icon}
      position={coordinates}
      title={`${name} at ${city}`}
    >
      <Popup className={localStyles.popup}>
        <div className={localStyles.imageContainer} style={{ width, height }}>
          <Image
            alt={`${name} at ${city}`}
            src={photo}
            width={width}
            height={height}
            layout="raw"
            className={localStyles.roundedImage} 
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
