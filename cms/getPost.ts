import ContentType from '../models/ContentType';
import parseMarkdownFile from '../utility/parseMarkdownFile';
import getContentDir from './getContentDir';

type PostQuery = {
  type: ContentType;
  locale?: string;
  slug: string;
};

/**
 * Get post content
 */
async function getPost({ type, locale, slug }: PostQuery) {
  const dir = getContentDir({ type, locale });
  const post = await parseMarkdownFile(dir, slug);

  return post || null;
}

export default getPost;
