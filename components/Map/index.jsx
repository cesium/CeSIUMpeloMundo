import { MapContainer, TileLayer, LayersControl } from 'react-leaflet';
import Marker from '~/components/Marker';

const tiles = [
  {
    name: 'Earth',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    checked: true
  },
  {
    name: 'Light',
    url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
  },
  {
    name: 'Dark',
    url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
  }
];

const Tile = ({ url, name, checked }) => (
  <LayersControl.BaseLayer checked={checked} name={name}>
    <TileLayer
      url={url}
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
  </LayersControl.BaseLayer>
);

export default function Map({ pins }) {
  return (
    <MapContainer
      center={[40, 0]}
      zoom={5}
      scrollWheelZoom={true}
      style={{ height: '100vh' }}
    >
      <LayersControl position="topright">
        {tiles.map((tile) => (
          <Tile key={tile.name} {...tile} />
        ))}
      </LayersControl>
      {pins.map((pin) => (
        <Marker key={`${pin.coordinates}-${pin.author}`} {...pin} />
      ))}
    </MapContainer>
  );
}
