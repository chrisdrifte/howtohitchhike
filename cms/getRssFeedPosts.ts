import getBlogPosts from './getBlogPosts';

type RssFeedPost = {
  title: string;
  excerpt: string;
  path: string;
  date: string;
};

/**
 * Get all posts that should appear in the rss feed
 */
async function getRssFeedPosts(locale: string): Promise<RssFeedPost[]> {
  const rssFeedPosts = await getBlogPosts({ locale });
  return rssFeedPosts;
}

export default getRssFeedPosts;
