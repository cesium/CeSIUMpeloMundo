import dynamic from 'next/dynamic';
import { ThemeProvider } from '~/hooks/useTheme';
import type { Pin } from '~/components/Marker';

import pins from '~/data/places.json';
import Sidebar from '~/components/Sidebar';

const Map = dynamic(() => import('~/components/Map'), { ssr: false });

export default function Home() {
  return (
    <div>
      <div className="sidebar" style={{ width: '20%' }}>
        <Sidebar pins={pins as Pin[]} />
      </div>
      <div className="map" style={{ marginLeft: '15%' }}>
        <ThemeProvider>
          <Map pins={pins as Pin[]} />
        </ThemeProvider>
      </div>
    </div>
  );
}
