import { BLOG_POSTS_DIR, BOOK_EXTRACTS_DIR, CONTRIBUTORS_DIR } from '../config';
import { ContentType } from '../models/Content';

export function getContentDir(contentType: ContentType) {
  switch (contentType) {
    case ContentType.Contributor:
      return `/content/${CONTRIBUTORS_DIR}`;

    case ContentType.BlogPost:
      return `/content/${BLOG_POSTS_DIR}`;

    case ContentType.BookExtract:
      return `/content/${BOOK_EXTRACTS_DIR}`;
  }
}
