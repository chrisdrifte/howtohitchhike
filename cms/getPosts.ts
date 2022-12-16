import ContentType from '../models/ContentType';
import Post from '../models/Post';
import getSlugs from './getSlugs';

type PostGetter<T> = (query: { slug: string; locale: string }) => Promise<T>;

type PostQuery = {
  type: ContentType;
  locale: string;
};

/**
 * Get all posts from a certain type and locale
 */
async function getPosts<T extends Post>(
  { type, locale }: PostQuery,
  getPost: PostGetter<T>
) {
  const slugs = await getSlugs({ type, locale });
  const postPromises = slugs.map((slug) => getPost({ locale, slug }));
  const posts = await Promise.all(postPromises);

  return posts;
}

export default getPosts;
