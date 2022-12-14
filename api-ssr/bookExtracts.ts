import { getContentDir } from '../api-client/getContentDir';
import { getContentPath } from '../api-client/getContentPath';
import BookExtract from '../models/BookExtract';
import { ContentType } from '../models/Content';
import markdownToHtml from '../utility/markdownToHtml';
import parseMarkdownFile from '../utility/parseMarkdownFile';
import { sortByPageNumberAsc } from '../utility/sortByPageNumberDesc';
import { getContributorBySlug } from './contributors';
import { getSlugs } from './slugs';

export function getBookExtractBySlug(slug: string, locale: string) {
  if (!slug) {
    return null;
  }

  const data = parseMarkdownFile(
    getContentDir(ContentType.BookExtract, locale),
    slug
  );

  if (!data) {
    return null;
  }

  const bookExtract: BookExtract = {
    type: ContentType.BookExtract,
    slug: slug,
    path: getContentPath(ContentType.BookExtract, slug),
    title: data.title,
    coverImage: data.coverImage,
    ogImage: { url: data.coverImage },
    excerpt: data.excerpt,
    content: data.content,
    pageNumber: parseInt(data.pageNumber),
    locale: locale,
    translationSource: data.translationSource || null,
    translator: getContributorBySlug(data.translator),
  };

  return bookExtract;
}

export function getAllBookExtracts(locale: string) {
  const bookExtracts = getSlugs(ContentType.BookExtract, locale)
    .map((slug) => getBookExtractBySlug(slug, locale))
    .sort(sortByPageNumberAsc);

  return bookExtracts;
}

export async function enhanceBookExtract(bookExtract: BookExtract) {
  if (!bookExtract) return null;

  return {
    ...bookExtract,
    content: await markdownToHtml(`${bookExtract.content || ""}`),
  };
}

export function getBookExtractPaths(locales: string[]) {
  const byLocales = locales.map((locale) =>
    getSlugs(ContentType.BookExtract, locale).map((slug) =>
      getBookExtractBySlug(slug, locale)
    )
  );
  return Object.values(byLocales).flat();
}
