import BlogPost from '../models/BlogPost';
import BookExtract from '../models/BookExtract';
import { ContentType } from '../models/Content';
import { i18n } from '../next.config';
import { getAllBlogPosts } from './blogPosts';
import { getAllBookExtracts } from './bookExtracts';
import { getSlugs } from './slugs';

export function getPostSlugs() {
  return i18n.locales
    .map((locale) => [
      ...getSlugs(ContentType.BlogPost, locale),
      ...getSlugs(ContentType.BookExtract, locale),
    ])
    .flat();
}

export function getAllPosts(): (BlogPost | BookExtract)[] {
  const posts = i18n.locales
    .map((locale) => [
      ...getAllBlogPosts(locale),
      ...getAllBookExtracts(locale),
    ])
    .flat();

  return posts;
}
