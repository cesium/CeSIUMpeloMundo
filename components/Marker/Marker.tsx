import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Marker as MarkerContainer } from 'react-leaflet';
import { IPin } from '~/lib/types';
import { getRelativeTimeString, getNameString, getDistance } from '~/lib/utils';
import { getIcon, getFullDateString } from './utils';
import AuthorIcon from '../AuthorIcon';
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
  const [showModal, setShowModal] = useState(false);
  const icon = getIcon(type);

  const name = useMemo(() => getNameString(author), [author]);

  const handleMarkerClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <MarkerContainer
        icon={icon}
        position={coordinates}
        title={`${name} at ${city}`}
        eventHandlers={{ click: handleMarkerClick }}
      />

      {showModal && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.imageContainer}>
              <Image
                alt={`${name} at ${city}`}
                src={photo}
                layout="fill"
                className={styles.image}
              />
            </div>
            <div className={styles.text}>
              <h2 className={styles.title}>{`${city}, ${country}`}</h2>
              <span className={styles.detail}>
                <i className="bi bi-calendar"></i> {getFullDateString(date)} (
                {getRelativeTimeString(date)})
              </span>
              <span className={styles.detail}>
                <i className="bi bi-signpost-fill"></i>{' '}
                {Math.round(getDistance(coordinates))} km away
              </span>
              <span className={styles.detail}>
                <AuthorIcon author={author} /> {name}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Marker;
