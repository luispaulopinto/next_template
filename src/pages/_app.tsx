import '@/styles/globals.css';
// import '@bee2pay/ui-components/dist/tailwind.css';
import '@bee2pay/ui-components/tailwindcss';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
