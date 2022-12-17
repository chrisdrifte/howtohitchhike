import ContentType from '../models/ContentType';
import LocalizedContentQuery from '../models/LocalizedContentQuery';
import sortByDateDesc from '../utility/sortByDateDesc';
import queryBlogPost from './queryBlogPost';
import queryPosts from './queryPosts';

type BlogPostsQuery = Pick<LocalizedContentQuery, "locale">;

/**
 * Get blog posts by locale
 */
async function queryBlogPosts({ locale }: BlogPostsQuery) {
  const type = ContentType.BlogPost;
  const blogPosts = await queryPosts({ type, locale }, queryBlogPost);
  return blogPosts.sort(sortByDateDesc);
}

export default queryBlogPosts;
