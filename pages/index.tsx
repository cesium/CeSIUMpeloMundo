import dynamic from 'next/dynamic';

import pins from '~/data/places.json';

const Map = dynamic(() => import('~/components/Map'), { ssr: false });

export default function Home() {
  return <Map pins={pins} />;
}
