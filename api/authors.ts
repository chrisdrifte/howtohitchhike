import { AUTHORS_DIR } from "../config";
import getMarkdownFilesFromDirectory from "../utility/getMarkdownFilesFromDirectory";
import parseMarkdownFile from "../utility/parseMarkdownFile";
import { sortByNameDesc } from "../utility/sortByNameDesc";

const authorsContentDir = `_${AUTHORS_DIR}`;

export function getAuthorSlugs() {
  const authorSlugs = getMarkdownFilesFromDirectory(authorsContentDir);
  return authorSlugs;
}

export function getAuthorBySlug(slug: string) {
  const data = parseMarkdownFile(authorsContentDir, slug);

  const author = {
    name: data.name,
    picture: data.picture,
  };

  return author;
}

export function getAllAuthors() {
  const authors = getAuthorSlugs().map(getAuthorBySlug).sort(sortByNameDesc);
  return authors;
}
