import { DateTime } from 'luxon';

export const getFullDateString = (date: string) => {
  return new Date(date).toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

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

  if (size > 3) {
    return authors.slice(0, 2).join(', ') + ' and ' + (size - 2) + ' others';
  }

  return authors.slice(0, size - 1).join(', ') + ' and ' + authors[size - 1];
};

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

export const sortByOldest = (a, b) => {
  return DateTime.fromISO(a.date).toMillis() - DateTime.fromISO(b.date).toMillis();
}

export const sortByLatest = (a, b) => {
  return DateTime.fromISO(b.date).toMillis() - DateTime.fromISO(a.date).toMillis();
}
/*
export function menu() {
  const input = document.getElementById(
    'menu_checkbox'
  ) as HTMLInputElement | null;
  if (input.checked) {
    return (document.getElementById('sidebar').style.display = 'block');
  }
  return (document.getElementById('sidebar').style.display = 'none');
}
*/
export function menu() {
  const input = document.getElementById(
    'menu_checkbox'
  ) as HTMLInputElement | null;
  let box = document.getElementById('sidebar');
  let content = document.getElementById('content');
  if (input.checked) {
    box.classList.add('sidebar_show');
    setTimeout(function () {
      content.classList.add('content_show');
    }, 400);
  }
  else {
    content.classList.remove('content_show');
    setTimeout(function () {
      box.classList.remove('sidebar_show');
    }, 400);
  }
}
