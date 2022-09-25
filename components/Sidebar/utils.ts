import { ESortDirection, ESortKeys } from './types';
import { DateTime } from 'luxon';
import { sortByOldest, distance } from '~/lib/utils';

export const sortByDistanceAscending = (a, b) => {
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

export const sortByDistanceDescending = (a, b) => {
  const x0 = 41.56157392223945;
  const y0 = -8.397397824887639;

  const x1 = a.coordinates[0];
  const y1 = a.coordinates[1];
  const x2 = b.coordinates[0];
  const y2 = b.coordinates[1];

  const d1 = distance(x0, x1, y0, y1);
  const d2 = distance(x0, x2, y0, y2);

  return d2 - d1;
};

export const sortByLatest = (a, b) => {
  return (
    DateTime.fromISO(b.date).toMillis() - DateTime.fromISO(a.date).toMillis()
  );
};

export const sortingFunctions = (sortKey, sortDirection) => {
  switch (sortKey) {
    case ESortKeys.Date: {
      switch (sortDirection) {
        case ESortDirection.Ascending:
          return sortByLatest;
        case ESortDirection.Descending:
          return sortByOldest;
      }
    }
    case ESortKeys.Distance: {
      switch (sortDirection) {
        case ESortDirection.Ascending:
          return sortByDistanceAscending;
        case ESortDirection.Descending:
          return sortByDistanceDescending;
      }
    }
  }
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
