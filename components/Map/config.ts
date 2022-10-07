import type { ITyle } from '~/components/TileController/types';
import { ETheme } from '~/lib/types';
import type { IFilter } from './types';

export const DEFAULT_TILES: ITyle[] = [
  {
    id: ETheme.Earth,
    name: 'Earth',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  },
  {
    id: ETheme.Light,
    name: 'Light',
    url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
  },
  {
    id: ETheme.Dark,
    name: 'Dark',
    url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
  }
];

export const DEFAULT_FILTERS: IFilter[] = [
  {
    name: 'Sticker',
    type: 'sticker',
    checked: true
  },
  {
    name: 'Merch',
    type: 'merch',
    checked: true
  },
  {
    name: 'Picture',
    type: 'picture',
    checked: true
  },
  {
    name: 'Special',
    type: 'special',
    checked: true
  },
  {
    name: 'Missing',
    type: 'missing',
    checked: true
  }
];
