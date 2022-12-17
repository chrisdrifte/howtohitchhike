import LocalizedContentQuery from '../models/LocalizedContentQuery';
import Post from '../models/Post';
import querySlugs from './querySlugs';

type PostQuery = Pick<LocalizedContentQuery, "type" | "locale">;

/**
 * Get all posts from a certain type and locale
 */
async function queryPosts<T extends Post>(
  { type, locale }: PostQuery,
  getPost: (query: { slug: string; locale: string }) => Promise<T>
) {
  const slugs = await querySlugs({ type, locale });
  const postPromises = slugs.map((slug) => getPost({ locale, slug }));
  const posts = await Promise.all(postPromises);

  return posts;
}

export default queryPosts;
