import { useState, useMemo, useEffect } from 'react';
import { Marker as MarkerContainer, Popup } from 'react-leaflet';
import { IPin } from '~/lib/types';
import { getRelativeTimeString, getNameString, getDistance } from '~/lib/utils';
import { getIcon, getFullDateString } from './utils';
import AuthorIcon from '../AuthorIcon';
import localStyles from './style.module.css';
import 'styles/globals.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const Marker = ({
  type,
  coordinates,
  city,
  country,
  author,
  photos,
  date,
  orientation,
  visits
}: IPin) => {
  const icon = useMemo(() => getIcon(type), [type]);
  const name = useMemo(() => getNameString(author), [author]);
  const [slide, setSlide] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [imageOrientation, setImageOrientation] = useState(
    orientation || 'vertical'
  );

  const handleImageLoad = (img: HTMLImageElement): void => {
    setImageOrientation(img.width > img.height ? 'horizontal' : 'vertical');
  };

  useEffect(() => {
    if (orientation || !photos) return;
    const img = new window.Image();
    if (visits) img.src = photos[slide] ?? visits[slide - photos.length].photo;
    else img.src = photos[slide];
    img.onload = () => handleImageLoad(img);
  }, [photos, orientation, slide, visits]);

  useEffect(() => {
    let sizes = '';
    const isMobile = window.innerWidth <= 500;

    if (isMobile) {
      sizes = imageOrientation === 'horizontal' ? '401:250' : '351:550';
    } else {
      sizes = imageOrientation === 'horizontal' ? '651:400' : '301:470';
    }

    setWidth(sizes.split(':').map(Number)[0]);
    setHeight(sizes.split(':').map(Number)[1]);
  }, [imageOrientation]);

  return (
    <MarkerContainer
      icon={icon}
      position={coordinates}
      title={`${name} at ${city}`}
    >
      <Popup className={localStyles.popup}>
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          pagination={{ clickable: true, type: 'bullets' }}
          modules={[Autoplay, Pagination]}
          centeredSlides
          style={{ width, height }}
          onSlideChange={(swiper) => setSlide(swiper.realIndex)}
        >
          {photos.map((photo, idx) => (
            <SwiperSlide key={idx}>
              <div className={localStyles.imageContainer}>
                <Image
                  alt={`${name} at ${city}`}
                  src={photo}
                  width={width}
                  height={height}
                  className={localStyles.roundedImage}
                />
                {idx === 0 && (
                  <div className={localStyles.textOverlay}>
                    <h1 className={localStyles.title}>
                      {city}, {country}
                    </h1>
                    <span className={localStyles.light}>
                      <i className="bi bi-calendar-fill"></i>{' '}
                      {getRelativeTimeString(date)} •{' '}
                      {date.replace(/^(\d{4})-(\d{2})-(\d{2})$/, '$3/$2/$1')}
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
                )}
              </div>
            </SwiperSlide>
          ))}
          {visits &&
            visits.map((visit, idx) => (
              <SwiperSlide key={idx}>
                <div className={localStyles.imageContainer}>
                  <Image
                    alt={`${visit.visitors} at ${city}`}
                    src={visit.photo}
                    width={width}
                    height={height}
                    className={localStyles.roundedImage}
                  />
                  <div className={localStyles.textOverlay}>
                    <span className={localStyles.light}>
                      <i className="bi bi-car-front-fill"></i> Visited{' '}
                      {getRelativeTimeString(visit.date)} •{' '}
                      {visit.date.replace(
                        /^(\d{4})-(\d{2})-(\d{2})$/,
                        '$3/$2/$1'
                      )}
                    </span>
                    <br />
                    <span>
                      <AuthorIcon author={visit.visitors} />{' '}
                      {getNameString(visit.visitors)}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </Popup>
    </MarkerContainer>
  );
};

export default Marker;
