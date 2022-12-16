import { BLOG_POSTS_DIR, BOOK_EXTRACTS_DIR, CONTRIBUTORS_DIR } from '../config';
import ContentType from '../models/ContentType';

type ContentDirQuery = {
  type: ContentType;
  locale?: string;
};

/**
 * Get relative directory of content with `/` prefix
 */
function getContentDir({ type, locale }: ContentDirQuery) {
  switch (type) {
    case ContentType.Contributor:
      return `/content/${CONTRIBUTORS_DIR}`;

    case ContentType.BlogPost:
      if (!locale) {
        throw new Error(`Content is ordered by locale`);
      }
      return `/content/${BLOG_POSTS_DIR}/${locale}`;

    case ContentType.BookExtract:
      if (!locale) {
        throw new Error(`Content is ordered by locale`);
      }
      return `/content/${BOOK_EXTRACTS_DIR}/${locale}`;
  }
}

export default getContentDir;
