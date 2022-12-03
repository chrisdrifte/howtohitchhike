module.exports = {
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
};
