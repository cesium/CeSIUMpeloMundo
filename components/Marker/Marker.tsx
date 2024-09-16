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
  orientation
}: IPin) => {
  const icon = useMemo(() => getIcon(type), [type]);
  const name = useMemo(() => getNameString(author), [author]);

  const [imageOrientation, setImageOrientation] = useState(
    orientation || 'vertical'
  );

  const handleImageLoad = (img: HTMLImageElement): void => {
    setImageOrientation(img.width > img.height ? 'horizontal' : 'vertical');
  };

  const popupClassName = useMemo(() => {
    const isMobile = window.innerWidth <= 500;

    if (isMobile) {
      return imageOrientation === 'horizontal' ? '401:250' : '351:550';
    } else {
      return imageOrientation === 'horizontal' ? '651:400' : '301:470';
    }
  }, [imageOrientation]);

  useEffect(() => {
    if (orientation || !photo) return;
    const img = new window.Image();
    img.src = photo;
    img.onload = () => handleImageLoad(img);
  }, [photo, orientation]);

  const [width, height] = useMemo(
    () => popupClassName.split(':').map(Number),
    [popupClassName]
  );

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
