import { useState } from 'react';
import {
  MapContainer,
  TileLayer,
  LayerGroup,
  Circle,
  Rectangle,
  FeatureGroup,
  LayersControl,
  Popup
} from 'react-leaflet';
import Marker from '~/components/Marker';
import luisMadrid from '~/public/photos/luis-madrid.jpg';

const pins = [
  {
    author: 'Luis Araújo',
    city: 'Madrid',
    coordinates: [40.4213, -3.7011],
    photo: luisMadrid
  }
];

const tiles = {
  earth: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  light: 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png',
  dark: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
};

const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

export default function Map() {
  return (
    <MapContainer
      center={[40, 0]}
      zoom={5}
      scrollWheelZoom={true}
      style={{ height: '100vh' }}
    >
      <LayersControl position="topright">
        <LayersControl.BaseLayer name="Earth">
          <TileLayer url={tiles.earth} attribution={attribution} />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Light">
          <TileLayer url={tiles.light} attribution={attribution} />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Dark">
          <TileLayer url={tiles.dark} checked attribution={attribution} />
        </LayersControl.BaseLayer>
      </LayersControl>
      {pins.map((pin) => (
        <Marker key={`${pin.coordinates}-${pin.author}`} {...pin} />
      ))}
    </MapContainer>
  );
}
