import { NextApiRequest, NextApiResponse } from 'next';

import { getSiteMapUrls } from '../../api-ssr/siteMap';

export default function SiteMapXml(_req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=3600");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset 
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
      xmlns:xhtml="http://www.w3.org/1999/xhtml"
      >
        ${getSiteMapUrls()}
    </urlset>`;

  res.end(xml);
}
