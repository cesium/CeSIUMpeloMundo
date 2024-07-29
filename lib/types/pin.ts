export enum EPinType {
  Sticker = 'sticker',
  Merch = 'merch',
  Picture = 'picture',
  Missing = 'missing',
  Leader = 'leader',
  Special = 'special'
}

export interface IPin {
  author: string | string[];
  username: string | string[];
  city: string;
  country: string;
  coordinates: [number, number];
  date: string;
  photo: string;
  type?: EPinType;
  streetview?: string;
  orientation?: string;
}
