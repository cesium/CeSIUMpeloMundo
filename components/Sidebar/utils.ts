import { ESortKeys } from './types';
import { DateTime } from 'luxon';
import { sortByOldest } from '~/lib/utils';

function distance(lat1, lat2, lon1, lon2) {
  lon1 = (lon1 * Math.PI) / 180;
  lon2 = (lon2 * Math.PI) / 180;
  lat1 = (lat1 * Math.PI) / 180;
  lat2 = (lat2 * Math.PI) / 180;

  let dlon = lon2 - lon1;
  let dlat = lat2 - lat1;
  let a =
    Math.pow(Math.sin(dlat / 2), 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);

  let c = 2 * Math.asin(Math.sqrt(a));

  let r = 6371;

  return c * r;
}

export const sortByDistance = (a, b) => {
  const x0 = 41.56157392223945;
  const y0 = -8.397397824887639;

  const x1 = a.coordinates[0];
  const y1 = a.coordinates[1];
  const x2 = b.coordinates[0];
  const y2 = b.coordinates[1];

  const d1 = distance(x0, x1, y0, y1);
  const d2 = distance(x0, x2, y0, y2);

  return d1 - d2;
};

export const sortByLatest = (a, b) => {
  return (
    DateTime.fromISO(b.date).toMillis() - DateTime.fromISO(a.date).toMillis()
  );
};

export const sortingFunctions = {
  [ESortKeys.Latest]: sortByLatest,
  [ESortKeys.Oldest]: sortByOldest,
  [ESortKeys.Distance]: sortByDistance
};

export function changeVariables(
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
