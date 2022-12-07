import Head from "next/head";
import { useRouter } from "next/router";

import {
  BLOG_DESCRIPTION,
  BLOG_TITLE,
  BLOG_URL,
  DEFAULT_OG_IMAGE_URL,
} from "../config";

const Meta = () => {
  const router = useRouter();

  const canonicalUrl = (
    BLOG_URL + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="apple-mobile-web-app-title" content={BLOG_TITLE} />
      <meta name="application-name" content={BLOG_TITLE} />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={BLOG_DESCRIPTION} />
      <meta property="og:image" content={BLOG_URL + DEFAULT_OG_IMAGE_URL} />
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
};

export default Meta;
