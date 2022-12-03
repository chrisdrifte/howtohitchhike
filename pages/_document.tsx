import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/reenie-beanie-v16-latin-regular.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/reenie-beanie-v16-latin-regular.woff"
          as="font"
          type="font/woff"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
