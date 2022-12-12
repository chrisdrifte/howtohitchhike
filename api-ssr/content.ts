import { BLOG_POSTS_DIR, BOOK_EXTRACTS_DIR, CONTRIBUTORS_DIR } from '../config';
import { ContentType } from '../models/Content';
import { getBlogPostBySlug } from './blogPosts';
import { getBookExtractBySlug } from './bookExtracts';
import { getContributorBySlug } from './contributors';

export function getContent(contentType: ContentType, slug: string) {
  switch (contentType) {
    case ContentType.Contributor:
      return getContributorBySlug(slug);

    case ContentType.BlogPost:
      return getBlogPostBySlug(slug);

    case ContentType.BookExtract:
      return getBookExtractBySlug(slug);
  }
}
