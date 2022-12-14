import RSS from 'rss';

import { BLOG_DESCRIPTION, BLOG_TITLE, BLOG_URL } from '../config';
import { getAllBlogPosts } from './blogPosts';

export function getRssFeed(locale: string) {
  type FeedPost = {
    title: string;
    excerpt: string;
    path: string;
    date: string;
  };

  const feedPosts: FeedPost[] = getAllBlogPosts(locale);

  const feedOptions = {
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    site_url: BLOG_URL,
    feed_url: `${BLOG_URL}/rss.xml`,
    image_url: `${BLOG_URL}/assets/favicon/logo.png`,
    pubDate: new Date(),
    copyright: `All rights reserved 2022, howtohitchhike.com`,
  };

  const feed = new RSS(feedOptions);

  feedPosts.map((post) => {
    feed.item({
      title: post.title,
      description: post.excerpt,
      url: BLOG_URL + post.path,
      date: post.date,
    });
  });

  return feed.xml({ indent: true });
}
