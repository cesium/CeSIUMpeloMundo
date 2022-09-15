import { ESortKeys } from './types';
import { sortByLatest, sortByOldest, sortByDistance } from '~/lib/utils';

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
