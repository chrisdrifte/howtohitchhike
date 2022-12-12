import { BLOG_POSTS_DIR, BOOK_EXTRACTS_DIR, CONTRIBUTORS_DIR } from '../config';
import { ContentType } from '../models/Content';

export function getContentPath(contentType: ContentType, slug: string) {
  switch (contentType) {
    case ContentType.Contributor:
      return `/${CONTRIBUTORS_DIR}/${slug}`;

    case ContentType.BlogPost:
      return `/${BLOG_POSTS_DIR}/${slug}`;

    case ContentType.BookExtract:
      return `/${BOOK_EXTRACTS_DIR}/${slug}`;
  }
}
