import {
  MapContainer,
  TileLayer,
  LayersControl,
  LayerGroup
} from 'react-leaflet';
import Marker from '~/components/Marker';
import type { Pin } from '~/components/Marker';

type Tyle = {
  name: string;
  url: string;
  checked?: boolean;
};

const tiles: Tyle[] = [
  {
    name: 'Light',
    url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
  },
  {
    name: 'Dark',
    url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
  },
  {
    name: 'Earth',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    checked: true
  }
];

const TileController = ({ url, name, checked }: Tyle) => (
  <LayersControl.BaseLayer checked={checked} name={name}>
    <TileLayer
      url={url}
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
  </LayersControl.BaseLayer>
);

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

function filterPins(pins: Pin[], {name, type, checked}: Filter) {
  return (
    <LayersControl.Overlay checked={checked} name={name}>
      <LayerGroup>
          {pins.filter((pin: Pin) => pin.type === type).map((pin: Pin) => (
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
        {filters.map((filter) =>
          filterPins(pins. filter)
        )}
      </LayersControl>
    </MapContainer>
  );
}
