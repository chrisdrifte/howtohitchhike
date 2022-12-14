import { getContentDir } from '../api-client/getContentDir';
import { getContentPath } from '../api-client/getContentPath';
import BookExtract from '../models/BookExtract';
import { ContentType } from '../models/Content';
import markdownToHtml from '../utility/markdownToHtml';
import parseMarkdownFile from '../utility/parseMarkdownFile';
import { sortByPageNumberAsc } from '../utility/sortByPageNumberDesc';
import { getSlugs } from './slugs';

export function getBookExtractBySlug(slug: string) {
  const data = parseMarkdownFile(getContentDir(ContentType.BookExtract), slug);

  console.log({ data });

  if (!data) {
    return;
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
  };

  return bookExtract;
}

export function getAllBookExtracts() {
  const bookExtracts = getSlugs(ContentType.BookExtract)
    .map(getBookExtractBySlug)
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
