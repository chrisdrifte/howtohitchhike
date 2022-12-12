import RSS from "rss";

import {
  BLOG_DESCRIPTION,
  BLOG_TITLE,
  BLOG_URL,
  BOOK_EXTRACTS_DIR,
} from "../config";
import { getBlogPostBySlug, getBlogPostSlugs } from "./blogPosts";

export function getRssFeed() {
  type FeedPost = { title: string; excerpt: string; url: string; date: string };

  const feedPosts: FeedPost[] = getBlogPostSlugs().map((slug) => ({
    ...getBlogPostBySlug(slug),
    url: `${BLOG_URL}/${BOOK_EXTRACTS_DIR}/${slug}`,
  }));

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
      url: post.url,
      date: post.date,
    });
  });

  return feed.xml({ indent: true });
}
