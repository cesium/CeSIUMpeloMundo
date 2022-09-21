import dynamic from 'next/dynamic';
import { ThemeProvider } from '~/hooks/useTheme';
import Head from 'next/head';
import { PLACES } from '~/data/places';

const Map = dynamic(() => import('~/components/Map'), { ssr: false });

export default function Home() {
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
      <ThemeProvider>
        <Map pins={PLACES} />
      </ThemeProvider>
    </div>
  );
}
