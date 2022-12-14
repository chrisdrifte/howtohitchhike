module.exports = {
  i18n: {
    locales: ["en-GB", "de", "pt-BR"],
    defaultLocale: "en-GB",
  },
  async rewrites() {
    return [
      {
        source: "/feed.xml",
        destination: "/api/feed",
      },
      {
        source: "/rss.xml",
        destination: "/api/feed",
      },
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ];
  },
  experimental: {
    forceSwcTransforms: true,
  },
};
