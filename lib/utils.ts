import { DateTime } from 'luxon';

export const getRelativeTimeString = (date: string) => {
  return DateTime.fromISO(date)
    .toRelative(Date.now())
    .toLocaleString(DateTime.DATETIME_MED);
};

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

export const sortByOldest = (a, b) => {
  return (
    DateTime.fromISO(a.date).toMillis() - DateTime.fromISO(b.date).toMillis()
  );
};
