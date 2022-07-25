import { MapContainer, TileLayer, LayersControl } from 'react-leaflet';
import Marker from '~/components/Marker';

const tiles = [
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
      center={[41.56157392223945, -8.397397824887639]}
      zoom={3.4}
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
