import { MapContainer, TileLayer, LayersControl } from 'react-leaflet';
import Marker from '~/components/Marker';
import luisMadrid from '~/public/photos/luis-madrid.jpg';
import nelsonHelsinki from '~/public/photos/nelson-helsinki.jpg';
import liraBern from '~/public/photos/lira-Bern.jpg';
import liraKoniz from '~/public/photos/lira-koniz.jpg';

const pins = [
  {
    author: 'Luis Araújo',
    city: 'Madrid',
    country: 'Spain',
    coordinates: [40.4213, -3.7011],
    photo: luisMadrid
  },
  {
    author: 'Nelson Estevão',
    city: 'Helsinki',
    country: 'Finland',
    coordinates: [60.1673826, 24.9551949],
    date: '2019-01-17',
    photo: nelsonHelsinki
  },
  {
    author: 'Francisco Lira',
    city: 'Bern',
    country: 'Switzerland',
    coordinates: [46.933938, 7.445919],
    date: '2019-08-12',
    photo: liraBern
  },
  {
    author: 'Francisco Lira',
    city: 'Köniz',
    country: 'Switzerland',
    coordinates: [46.919683, 7.436997],
    date: '2019-08-01',
    photo: liraKoniz
  }
  
];

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

export default function Map() {
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
