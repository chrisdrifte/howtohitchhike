import { BOOK_EXTRACTS_DIR } from '../config';
import BookExtract from '../interfaces/BookExtract';
import getMarkdownFilesFromDirectory from '../utility/getMarkdownFilesFromDirectory';
import parseMarkdownFile from '../utility/parseMarkdownFile';
import { sortByPageNumberAsc } from '../utility/sortByPageNumberDesc';

const bookExtractsContentDir = `/content/${BOOK_EXTRACTS_DIR}`;

export function getBookExtractSlugs() {
  return getMarkdownFilesFromDirectory(bookExtractsContentDir);
}

export function getBookExtractBySlug(slug: string) {
  const data = parseMarkdownFile(bookExtractsContentDir, slug);

  const bookExtract: BookExtract = {
    slug: slug,
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
  const bookExtracts = getBookExtractSlugs()
    .map(getBookExtractBySlug)
    .sort(sortByPageNumberAsc);
  return bookExtracts;
}

export function getNextBookExtractBySlug(slug: string) {
  const slugs = getBookExtractSlugs();
  const nextSlug = slugs[slugs.indexOf(slug) + 1];
  return nextSlug ? getBookExtractBySlug(nextSlug) : null;
}
