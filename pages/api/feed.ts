import { NextApiRequest, NextApiResponse } from 'next';

import { getRssFeed } from '../../api-ssr/rssFeed';

export default function FeedXml(_req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=3600");

  const xml = getRssFeed();

  res.end(xml);
}
