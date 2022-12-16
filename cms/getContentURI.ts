import { BLOG_POSTS_DIR, BOOK_EXTRACTS_DIR, CONTRIBUTORS_DIR } from '../config';
import ContentType from '../models/ContentType';

type ContentURIQuery = {
  type: ContentType;
  slug: string;
};

/**
 * Get relative URI with `/` prefix
 */
function getContentURI({ type, slug }: ContentURIQuery) {
  switch (type) {
    case ContentType.Contributor:
      return `/${CONTRIBUTORS_DIR}/${slug}`;

    case ContentType.BlogPost:
      return `/${BLOG_POSTS_DIR}/${slug}`;

    case ContentType.BookExtract:
      return `/${BOOK_EXTRACTS_DIR}/${slug}`;
  }
}

export default getContentURI;
