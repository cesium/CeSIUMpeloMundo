export enum EPinType {
  Sticker = 'sticker',
  Picture = 'picture',
  Special = 'special',
  Leader = 'leader'
}

export interface IPin {
  author: string | string[];
  city: string;
  country: string;
  coordinates: [number, number];
  date: string;
  photo: string;
  type?: EPinType;
  streetview?: string;
}
