import { NextApiRequest, NextApiResponse } from 'next';
import RSS from 'rss';

import queryRssFeedPosts from '../../cms/queryRssFeedPosts';
import { BLOG_DESCRIPTION, BLOG_TITLE, BLOG_URL } from '../../config';
import { i18n } from '../../next.config';

export default function FeedXml(_req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=3600");

  queryRssFeedPosts({ locale: i18n.defaultLocale }).then((rssFeedPosts) => {
    const feed = new RSS({
      title: BLOG_TITLE,
      description: BLOG_DESCRIPTION,
      site_url: BLOG_URL,
      feed_url: `${BLOG_URL}/rss.xml`,
      image_url: `${BLOG_URL}/assets/favicon/logo.png`,
      pubDate: new Date(),
      copyright: `All rights reserved 2022, howtohitchhike.com`,
    });

    rssFeedPosts.forEach((post) => {
      feed.item({
        title: post.title,
        description: post.excerpt,
        url: BLOG_URL + post.path,
        date: post.date,
      });
    });

    const xml = feed.xml({ indent: true });

    res.end(xml);
  });
}
