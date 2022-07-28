import dynamic from 'next/dynamic';
import { ThemeProvider } from '~/hooks/useTheme';
import type { Pin } from '~/components/Marker';

import pins from '~/data/places.json';

const Map = dynamic(() => import('~/components/Map'), { ssr: false });

export default function Home() {
  return (
    <ThemeProvider>
      <Map pins={pins as Pin[]} />
    </ThemeProvider>
  );
}
