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
  photos: string[];
  type?: EPinType;
  streetview?: string;
  orientation?: string;
  visits?: {
    photo: string;
    date: string;
    visitors: string | string[];
  }[];
}
