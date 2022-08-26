import dynamic from 'next/dynamic';
import { ThemeProvider } from '~/hooks/useTheme';

import { PLACES } from '~/data/places';

const Map = dynamic(() => import('~/components/Map'), { ssr: false });

export default function Home() {
  return (
    <ThemeProvider>
      <Map pins={PLACES} />
    </ThemeProvider>
  );
}
