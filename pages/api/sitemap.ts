import { getSiteMapUrls } from '../../content-api/siteMap';

export default function SiteMapXml(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=3600");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
      ${getSiteMapUrls()}
      </urlset>`;

  res.end(xml);
}
