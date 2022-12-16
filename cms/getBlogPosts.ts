import ContentType from '../models/ContentType';
import sortByDateDesc from '../utility/sortByDateDesc';
import getBlogPost from './getBlogPost';
import getPosts from './getPosts';

type BlogPostsQuery = {
  locale: string;
};

/**
 * Get blog posts by locale
 */
async function getBlogPosts({ locale }: BlogPostsQuery) {
  const type = ContentType.BlogPost;
  const blogPosts = await getPosts({ type, locale }, getBlogPost);
  return blogPosts.sort(sortByDateDesc);
}

export default getBlogPosts;
