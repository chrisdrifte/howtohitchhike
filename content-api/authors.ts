import { AUTHORS_DIR } from '../config';
import Author from '../interfaces/Author';
import getMarkdownFilesFromDirectory from '../utility/getMarkdownFilesFromDirectory';
import parseMarkdownFile from '../utility/parseMarkdownFile';
import { sortByNameDesc } from '../utility/sortByNameDesc';

const authorsContentDir = `/content/${AUTHORS_DIR}`;

export function getAuthorSlugs() {
  const authorSlugs = getMarkdownFilesFromDirectory(authorsContentDir);
  return authorSlugs;
}

export function getAuthorBySlug(slug: string) {
  const data = parseMarkdownFile(authorsContentDir, slug);

  const author: Author = {
    name: data.name,
    picture: data.picture,
  };

  return author;
}

export function getAllAuthors() {
  const authors = getAuthorSlugs().map(getAuthorBySlug).sort(sortByNameDesc);
  return authors;
}
