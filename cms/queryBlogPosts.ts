import memoize from 'lodash.memoize';

import ContentType from '../models/ContentType';
import LocalizedContentQuery from '../models/LocalizedContentQuery';
import sortByDateDesc from '../utility/sortByDateDesc';
import getKey from './getKey';
import queryBlogPost from './queryBlogPost';
import queryPosts from './queryPosts';

type BlogPostsQuery = Pick<LocalizedContentQuery, "locale">;

/**
 * Get blog posts by locale
 */
const queryBlogPosts = memoize(async function ({ locale }: BlogPostsQuery) {
  const type = ContentType.BlogPost;
  const blogPosts = await queryPosts({ type, locale }, queryBlogPost);
  return blogPosts.sort(sortByDateDesc);
}, getKey);

export default queryBlogPosts;
