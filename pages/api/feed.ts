import { NextApiRequest, NextApiResponse } from 'next';

import { getRssFeed } from '../../api-ssr/rssFeed';
import { i18n } from '../../next.config';

export default function FeedXml(req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=3600");

  const xml = getRssFeed(i18n.defaultLocale);

  res.end(xml);
}
