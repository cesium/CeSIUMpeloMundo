import dynamic from 'next/dynamic';
import { ThemeProvider } from '~/hooks/useTheme';
import Head from 'next/head';
import { PLACES } from '~/data/places';
import Sidebar from '~/components/Sidebar';
import Menu from '~/components/Menu';
import { useState } from 'react';

const Map = dynamic(() => import('~/components/Map'), { ssr: false });

export default function Home() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [mapRef, setMapRef] = useState(null);

  return (
    <div>
      <Head>
        <title>CeSIUM Pelo Mundo</title>
        <meta
          name="description"
          content="A world map with the places we've been"
          key="description"
        />
      </Head>
      <Menu isOpen={isOpen} setOpen={setOpen} />
      <Sidebar
        mapRef={mapRef}
        isOpen={isOpen}
        setOpen={setOpen}
        pins={PLACES}
      />
      <div className="map">
        <ThemeProvider>
          <Map setMapRef={setMapRef} pins={PLACES} />
        </ThemeProvider>
      </div>
    </div>
  );
}
