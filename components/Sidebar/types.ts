import type { IPin } from '~/lib/types';

export interface Props {
  pins: IPin[];
  isOpen: boolean;
}

export enum ESortKeys {
  Latest = 'Latest',
  Oldest = 'Oldest',
  Distance = 'Distance'
}
