import { useMemo, useState } from 'react';
import { Transition } from '@headlessui/react';
import { sortByLatest, sortByOldest, sortByDistance } from '~/lib/utils';
import Image from 'next/image';
import type { IPin } from '~/lib/types';
import Location from '~/components/Location';

import styles from './style.module.css';
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

export default function Sidebar({ pins, isOpen }: Props) {
  const [sortKey, setSortKey] = useState<ESortKeys>(ESortKeys.Latest);
  const sortedPins = useMemo(
    () => pins.sort(sortingFunctions[sortKey]),
    [pins, sortKey]
  );

  return (
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <div className={styles.sidebar}>
        <div className={styles.content}>
          <div>
            <div className={styles.heading}>
              <Image
                src="/images/cesium.png"
                alt="CeSIUM Logo"
                width={180}
                height={61}
              />
              <br></br>
              <div className={styles.buttons}>
                {/*} - FOR FUTURE IMPLEMENTATION OF THE LEADERBOARD -
          <button className={styles.button} type={'button'} role="button">
            {' '}
            Locations{' '}
          </button>
          &nbsp;
          <button className={styles.button} type={'button'} role="button">
            {' '}
            Leaderboard{' '}
          </button>
          <br></br>
          */}
                <div style={{ paddingTop: '5px' }}>
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
              />
            ))}
          </div>
        </div>
      </div>
    </Transition>
  );
}
