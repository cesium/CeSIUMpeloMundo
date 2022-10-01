import { ESortDirection, ESortKeys } from './types';
import { DateTime } from 'luxon';
import { sortByOldest, getDistance } from '~/lib/utils';
import { IPin } from '~/lib/types';

export const sortByDistanceAscending = (a: IPin, b: IPin) => {
  const d1 = getDistance(a.coordinates);
  const d2 = getDistance(b.coordinates);
  return d1 - d2;
};

export const sortByDistanceDescending = (a: IPin, b: IPin) => {
  const d1 = getDistance(a.coordinates);
  const d2 = getDistance(b.coordinates);
  return d2 - d1;
};

export const sortByLatest = (a: IPin, b: IPin) => {
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
