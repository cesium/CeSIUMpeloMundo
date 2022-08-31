import dynamic from 'next/dynamic';
import { ThemeProvider } from '~/hooks/useTheme';

import { PLACES } from '~/data/places';
import Sidebar from '~/components/Sidebar';

const Map = dynamic(() => import('~/components/Map'), { ssr: false });

export default function Home() {
  return (
    <div>
      <div className="sidebar" style={{ width: '23%' }}>
        <Sidebar pins={PLACES} />
      </div>
      <div className="map" style={{ marginLeft: '18%' }}>
        <ThemeProvider>
          <Map pins={PLACES} />
        </ThemeProvider>
      </div>
    </div>
  );
}
