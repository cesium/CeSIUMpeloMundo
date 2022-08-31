import dynamic from 'next/dynamic';
import { ThemeProvider } from '~/hooks/useTheme';
import { menu } from '~/lib/utils';
import { PLACES } from '~/data/places';
import Sidebar from '~/components/Sidebar';

const Map = dynamic(() => import('~/components/Map'), { ssr: false });

export default function Home() {
  return (
    <div>
      <input id="menu_checkbox" type={'checkbox'} onClick={menu} />
      <label htmlFor="menu_checkbox" title="Menu">
        <div></div>
        <div></div>
        <div></div>
      </label>
      <div id="sidebar" className="sidebar">
        <Sidebar pins={PLACES} />
      </div>
      <div className="map">
        <ThemeProvider>
          <Map pins={PLACES} />
        </ThemeProvider>
      </div>
    </div>
  );
}
