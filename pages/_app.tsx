import type { AppProps } from 'next/app';
import '~/styles/globals.css';

function CeSIUMpeloMundo({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default CeSIUMpeloMundo;
