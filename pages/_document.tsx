import { Head, Html, Main, NextScript } from 'next/document';

import GTag from '../components/GTag';
import { GA_MEASUREMENT_ID } from '../config';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/reenie-beanie-v16-latin-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <GTag gaMeasurementId={GA_MEASUREMENT_ID} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
