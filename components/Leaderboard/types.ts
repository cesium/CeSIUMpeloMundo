export interface Player {
  author: string;
  username: string;
  pins: number;
  distance: number;
}

export interface User {
  author: string;
  username: string;
  coordinates: [number, number];
}

export enum ELeaderKeys {
  Pins = 'Pins',
  Distance = 'Distance'
}
