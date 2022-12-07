import { getRssFeed } from "../../api/rssFeed";

export default function FeedXml(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=3600");

  const xml = getRssFeed();

  res.end(xml);
}
