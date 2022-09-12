import { useMemo, useState } from 'react';
import { sortByLatest, sortByOldest, sortByDistance } from '~/lib/utils';
import Image from 'next/image';
import type { IPin } from '~/lib/types';
import Location from '~/components/Location';
import styles from './style.module.css';
import { CSSTransition } from 'react-transition-group';
import Leaderboard from '~/components/Leaderboard';

interface Props {
  pins: IPin[];
  isOpen: boolean;
}

enum ESortKeys {
  Latest = 'Latest',
  Oldest = 'Oldest',
  Distance = 'Distance'
}

const sortingFunctions = {
  [ESortKeys.Latest]: sortByLatest,
  [ESortKeys.Oldest]: sortByOldest,
  [ESortKeys.Distance]: sortByDistance
};

function changeVariables(
  view: boolean,
  setLocations: (boolean) => void,
  setLeaderboard: (boolean) => void
) {
  if (view) {
    setLeaderboard(false);
    setTimeout(() => setLocations(true), 250);
  } else {
    setLocations(false);
    setTimeout(() => setLeaderboard(true), 250);
  }
}

export default function Sidebar({ pins, isOpen }: Props) {
  const [locations, setLocations] = useState<boolean>(true);
  const [leaderboard, setLeaderboard] = useState<boolean>(false);
  const [sortKey, setSortKey] = useState<ESortKeys>(ESortKeys.Latest);
  const sortedPins = useMemo(
    () => pins.sort(sortingFunctions[sortKey]),
    [pins, sortKey]
  );

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
            <Image
              src="/images/cesium.png"
              alt="CeSIUM Logo"
              width={180}
              height={61}
            />
            <br></br>
            <div className={styles.buttons}>
              <button
                className={styles.button}
                type={'button'}
                role="button"
                onClick={() =>
                  changeVariables(true, setLocations, setLeaderboard)
                }
              >
                {' '}
                Locations{' '}
              </button>
              &nbsp;
              <button
                className={styles.button}
                type={'button'}
                role="button"
                onClick={() =>
                  changeVariables(false, setLocations, setLeaderboard)
                }
              >
                {' '}
                Leaderboard{' '}
              </button>
              <br></br>
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
                <label>
                  <b>Sort by: </b>
                </label>
                <select
                  onChange={(e) => setSortKey(e.target.value as ESortKeys)}
                  className={styles.button}
                >
                  {Object.keys(ESortKeys).map((key) => (
                    <option key={key} value={key}>
                      {key}
                    </option>
                  ))}
                </select>
              </div>
              {sortedPins.map((pin: IPin) => (
                <Location
                  key={`${pin.coordinates[0]}#${pin.coordinates[1]}`}
                  type={pin.type}
                  city={pin.city}
                  country={pin.country}
                  author={pin.author}
                  date={pin.date}
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
