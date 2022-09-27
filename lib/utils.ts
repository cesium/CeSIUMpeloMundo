import { DateTime } from 'luxon';
import { IPin } from '~/lib/types';

// These functions are here cause they're used in more than one component/file across the project.


// distance() - Used on Location and Sidebar components

export function distance(lat1, lat2, lon1, lon2) {
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

// getRelativeTimeString() - Used on Location and Marker components

export const getRelativeTimeString = (date: string) => {
  return DateTime.fromISO(date)
    .toRelative(Date.now())
    .toLocaleString(DateTime.DATETIME_MED);
};

// getNameString() - Used on Location and Marker components

export const getNameString = (authors: string[] | string) => {
  if (!Array.isArray(authors)) {
    return authors;
  }

  const size = authors.length;

  if (size <= 1) {
    return authors.join();
  }

  if (size <= 3) {
    return authors.slice(0, size - 1).join(', ') + ' and ' + authors[size - 1];
  }

  return authors.slice(0, 2).join(', ') + ' and ' + (size - 2) + ' others';
};

// sortByOldest() - Used on Sidebar and Leaderboard components

export const sortByOldest = (a: IPin, b: IPin) => {
  return (
    DateTime.fromISO(a.date).toMillis() - DateTime.fromISO(b.date).toMillis()
  );
};
