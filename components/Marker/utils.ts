import { Icon } from 'leaflet';

import { EPinType } from '~/lib/types';

export const getIcon = (type: EPinType): Icon =>
  new Icon({
    iconUrl: `/images/markers/${type}.png`,
    iconSize: [45, 90]
  });
