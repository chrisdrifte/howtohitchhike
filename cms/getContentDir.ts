import { BLOG_POSTS_DIR, BOOK_EXTRACTS_DIR, CONTRIBUTORS_DIR } from '../config';
import ContentType from '../models/ContentType';

type ContentDirQuery = {
  type: ContentType;
  locale?: string;
};

const CONTENT_DIR = "content";

/**
 * Get relative directory of content with `/` prefix
 */
function getContentDir({ type, locale }: ContentDirQuery) {
  switch (type) {
    case ContentType.Contributor:
      if (locale) {
        throw new Error(`${type} is not ordered by locale`);
      }
      return `/${CONTENT_DIR}/${CONTRIBUTORS_DIR}`;

    case ContentType.BlogPost:
      if (!locale) {
        throw new Error(`${type} is ordered by locale`);
      }
      return `/${CONTENT_DIR}/${BLOG_POSTS_DIR}/${locale}`;

    case ContentType.BookExtract:
      if (!locale) {
        throw new Error(`${type} is ordered by locale`);
      }
      return `/${CONTENT_DIR}/${BOOK_EXTRACTS_DIR}/${locale}`;
  }
}

export default getContentDir;
