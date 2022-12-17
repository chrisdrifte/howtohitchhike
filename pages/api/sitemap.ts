import { NextApiRequest, NextApiResponse } from 'next';

import querySiteMapPages from '../../cms/querySiteMapPages';

export default function SiteMapXml(_req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=3600");

  querySiteMapPages().then((pages) => {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset 
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
      xmlns:xhtml="http://www.w3.org/1999/xhtml"
      >
        ${pages
          .map(
            (page) => `
              <url>
                <loc>${page.uri}</loc>${page.translations
              .map(
                (translation) => `
                <xhtml:link
                     rel="alternate"
                     hreflang="${translation.locale}"
                     href="${translation.uri}" />`
              )
              .join("")}
              </url>`
          )
          .join("")}
    </urlset>`;

    res.end(xml);
  });
}
