import type { IPin } from '~/lib/types';

export interface Props {
  pins: IPin[];
  isOpen: boolean;
  setOpen: Function;
  mapRef: undefined;
}

export enum ESortKeys {
  Latest = 'Latest',
  Oldest = 'Oldest',
  Distance = 'Distance'
}
