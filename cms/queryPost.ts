import LocalizedContentQuery from '../models/LocalizedContentQuery';
import parseMarkdownFile from '../utility/parseMarkdownFile';
import getContentDir from './getContentDir';

type PostQuery = Pick<LocalizedContentQuery, "type" | "locale" | "slug">;

/**
 * Get post content
 */
async function queryPost({ type, locale, slug }: PostQuery) {
  const dir = getContentDir({ type, locale });
  const post = await parseMarkdownFile(dir, slug);

  return post || null;
}

export default queryPost;
