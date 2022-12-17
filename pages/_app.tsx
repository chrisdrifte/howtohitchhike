import '../styles/index.css';

import { AppProps } from 'next/app';

import { Analytics } from '@vercel/analytics/react';

import GTag from '../components/GTag';
import { GA_MEASUREMENT_ID } from '../config';
import useGA from '../hooks/useGA';

export default function MyApp({ Component, pageProps }: AppProps) {
  useGA();

  return (
    <>
      <Component {...pageProps} />
      <GTag gaMeasurementId={GA_MEASUREMENT_ID} />
      <Analytics />
    </>
  );
}
