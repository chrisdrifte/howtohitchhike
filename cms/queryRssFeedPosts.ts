import LocalizedContentQuery from '../models/LocalizedContentQuery';
import queryBlogPosts from './queryBlogPosts';

type RssFeedPostsQuery = Pick<LocalizedContentQuery, "locale">;

type RssFeedPost = {
  title: string;
  excerpt: string;
  path: string;
  date: string;
};

/**
 * Get all posts that should appear in the rss feed
 */
async function queryRssFeedPosts({
  locale,
}: RssFeedPostsQuery): Promise<RssFeedPost[]> {
  const rssFeedPosts = await queryBlogPosts({ locale });
  return rssFeedPosts;
}

export default queryRssFeedPosts;
