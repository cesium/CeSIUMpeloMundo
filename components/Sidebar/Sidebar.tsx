import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { IPin } from '~/lib/types';
import Location from '~/components/Location';
import styles from './style.module.css';
import { CSSTransition } from 'react-transition-group';
import Leaderboard from '~/components/Leaderboard';
import { Props, ESortKeys, ESortDirection } from './types';
import { sortingFunctions, changeVariables } from './utils';

export default function Sidebar({ pins, isOpen, setOpen, mapRef }: Props) {
  const [locations, setLocations] = useState<boolean>(true);
  const [leaderboard, setLeaderboard] = useState<boolean>(false);
  const [sortKey, setSortKey] = useState<ESortKeys>(ESortKeys.Date);
  const [sortDirection, setSortDirection] = useState<ESortDirection>(
    ESortDirection.Ascending
  );

  const sortedPins = useMemo(
    () => pins.sort(sortingFunctions(sortKey, sortDirection)),
    [pins, sortKey, sortDirection]
  );

  const getButtonStyle = (button: string) => {
    if (button === 'locations') {
      if (locations) {
        return styles.button_active;
      }
      return styles.button;
    }
    if (button === 'leaderboard') {
      if (leaderboard) {
        return styles.button_active;
      }
      return styles.button;
    }
  };

  return (
    <CSSTransition
      in={isOpen}
      timeout={500}
      classNames={{
        enter: styles.slide_enter,
        enterActive: styles.slide_enter_active,
        exit: styles.slide_exit,
        exitActive: styles.slide_exit_active
      }}
      unmountOnExit
    >
      <div className={styles.sidebar}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <Link href="https://cesium.link/">
              <Image
                src="/images/cesium.png"
                alt="CeSIUM Logo"
                width={180}
                height={61}
                style={{ cursor: 'pointer' }}
                priority
              />
            </Link>
            <br></br>
            <div className={styles.buttons}>
              <div className={styles.tab}>
                <button
                  className={getButtonStyle('locations')}
                  type={'button'}
                  role="button"
                  onClick={() =>
                    changeVariables(true, setLocations, setLeaderboard)
                  }
                >
                  {' '}
                  Locations <i className="bi bi-geo-fill"></i>{' '}
                </button>
                &nbsp;
                <button
                  className={getButtonStyle('leaderboard')}
                  type={'button'}
                  role="button"
                  onClick={() =>
                    changeVariables(false, setLocations, setLeaderboard)
                  }
                >
                  {' '}
                  Leaderboard <i className="bi bi-award-fill"></i>{' '}
                </button>
                <br></br>
              </div>
            </div>
          </div>
          <CSSTransition
            in={locations}
            timeout={250}
            classNames={{
              enter: styles.locations_enter,
              enterActive: styles.locations_enter_active,
              exit: styles.locations_exit,
              exitActive: styles.locations_exit_active
            }}
            unmountOnExit
          >
            <div>
              <div className={styles.sort}>
                <div className={styles.sort_back}>
                  <label>
                    <b>Sort by: </b>
                  </label>
                  <select
                    onChange={(e) => setSortKey(e.target.value as ESortKeys)}
                    className={styles.sort_button}
                  >
                    {Object.keys(ESortKeys).map((key) => (
                      <option key={key} value={key}>
                        {key}
                      </option>
                    ))}
                  </select>
                  <select
                    onChange={(e) =>
                      setSortDirection(e.target.value as ESortDirection)
                    }
                    className={styles.sort_button}
                  >
                    <option>↓</option>
                    <option>↑</option>
                  </select>
                </div>
              </div>
              {sortedPins.map((pin: IPin) => (
                <Location
                  key={`${pin.coordinates[0]}#${pin.coordinates[1]}`}
                  type={pin.type}
                  city={pin.city}
                  country={pin.country}
                  author={pin.author}
                  date={pin.date}
                  coordinates={pin.coordinates}
                  map={mapRef}
                  setOpen={setOpen}
                  sortKey={sortKey}
                />
              ))}
            </div>
          </CSSTransition>
          <CSSTransition
            in={leaderboard}
            timeout={250}
            classNames={{
              enter: styles.leaderboard_enter,
              enterActive: styles.leaderboard_enter_active,
              exit: styles.leaderboard_exit,
              exitActive: styles.leaderboard_exit_active
            }}
            unmountOnExit
          >
            <Leaderboard></Leaderboard>
          </CSSTransition>
        </div>
      </div>
    </CSSTransition>
  );
}
