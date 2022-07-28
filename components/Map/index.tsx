import {
  MapContainer,
  TileLayer,
  LayersControl,
  LayerGroup
} from 'react-leaflet';
import Marker from '~/components/Marker';
import type { Pin } from '~/components/Marker';
import useTheme from '~/hooks/useTheme';
import type { Theme } from '~/hooks/useTheme';

type Tyle = {
  id: Theme;
  name: string;
  url: string;
};

const tiles: Tyle[] = [
  {
    id: 'earth',
    name: 'Earth',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  },
  {
    id: 'light',
    name: 'Light',
    url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
  },
  {
    id: 'dark',
    name: 'Dark',
    url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
  }
];

const TileController = ({ id, url, name }: Tyle) => {
  const { theme, changeTheme } = useTheme();

  return (
    <LayersControl.BaseLayer checked={id === theme} name={name}>
      <TileLayer
        url={url}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        eventHandlers={{
          add: () => {
            changeTheme(id);
          }
        }}
      />
    </LayersControl.BaseLayer>
  );
};

interface Filter {
  name: string;
  type: string;
  checked: boolean;
}

const filters: Filter[] = [
  {
    name: 'Sticker',
    type: 'sticker',
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
  }
];

function filterPins(pins: Pin[], { name, type, checked }: Filter) {
  return (
    <LayersControl.Overlay checked={checked} name={name}>
      <LayerGroup>
        {pins
          .filter((pin: Pin) => pin.type === type)
          .map((pin: Pin) => (
            <Marker key={`${pin.coordinates}-${pin.author}`} {...pin} />
          ))}
      </LayerGroup>
    </LayersControl.Overlay>
  );
}

export default function Map({ pins }: { pins: Pin[] }) {
  return (
    <MapContainer
      center={[41.56157392223945, -8.397397824887639]}
      zoom={3.4}
      scrollWheelZoom={true}
      style={{ height: '100vh' }}
    >
      <LayersControl position="topright">
        {tiles.map((tile) => (
          <TileController key={tile.name} {...tile} />
        ))}
        {filters.map((filter: Filter) => filterPins(pins, filter))}
      </LayersControl>
    </MapContainer>
  );
}
