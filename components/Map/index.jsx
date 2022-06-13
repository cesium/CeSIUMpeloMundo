import { MapContainer, TileLayer, LayersControl } from 'react-leaflet';
import Marker from '~/components/Marker';
const pins = [
  {
    author: 'Luis Araújo',
    city: 'Madrid',
    country: 'Spain',
    coordinates: [40.4213, -3.7011],
    date: '2021-07-06',
    photo: '/photos/luis-madrid.jpg'
  },
  {
    author: 'Luis Araújo',
    city: 'Barcelona',
    country: 'Spain',
    coordinates: [41.5888, 1.8422],
    date: '2021-07-11',
    photo: '/photos/luis-barcelona.jpg'
  },
  {
    author: 'Nelson Estevão',
    city: 'Helsinki',
    country: 'Finland',
    coordinates: [60.1673826, 24.9551949],
    date: '2019-01-17',
    photo: '/photos/nelson-helsinki.jpg'
  },
  {
    author: 'Francisco Lira',
    city: 'Bern',
    country: 'Switzerland',
    coordinates: [46.933938, 7.445919],
    date: '2019-08-12',
    photo: '/photos/lira-bern.jpg'
  },
  {
    author: 'Francisco Lira',
    city: 'Köniz',
    country: 'Switzerland',
    coordinates: [46.919683, 7.436997],
    date: '2019-08-01',
    photo: '/photos/lira-koniz.jpg'
  },
  {
    author: 'Filipe Felício',
    city: 'Amesterdam',
    country: 'The Netherlands',
    coordinates: [52.37548607644857, 4.896832185020905],
    date: '2022-02-23',
    photo: '/photos/felicio-amesterdam.jpg'
  },
  {
    author: 'Filipe Felício',
    city: 'London',
    country: 'United Kingdom',
    coordinates: [51.486082974689104, -0.19962908422844805],
    date: '2022-06-09',
    photo: '/photos/felicio-london-valim.jpg'
  },
  {
    author: 'João Correia',
    city: 'EPFL, Lausanne',
    country: 'Switzerland',
    coordinates: [46.519164417441345, 6.563699123819026],
    date: '2022-06-06',
    photo: '/photos/correia-lausanne.jpg'
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
