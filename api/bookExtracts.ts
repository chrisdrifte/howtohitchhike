import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

import { BOOK_EXTRACTS_DIR } from "../config";

const bookDirectory = join(process.cwd(), `_${BOOK_EXTRACTS_DIR}`);

export function getBookExtractSlugs() {
  if (!fs.existsSync(bookDirectory)) return [];
  return fs.readdirSync(bookDirectory).map((slug) => slug.replace(/\.md$/, ""));
}

export function getBookExtractBySlug(slug: string, fields: string[] = []) {
  const fullPath = join(bookDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {
    type: "book-extract",
  };

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = slug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllBookExtracts(fields: string[] = []) {
  const slugs = getBookExtractSlugs();

  const posts = slugs
    .map((slug) => getBookExtractBySlug(slug, fields))
    // sort posts by pageNumber in asccending order
    .sort((post1, post2) => (post1.pageNumber < post2.pageNumber ? -1 : 1));

  return posts;
}

export function getNextBookExtractBySlug(slug: string, fields: string[] = []) {
  const slugs = getBookExtractSlugs();
  const nextSlug = slugs[slugs.indexOf(slug) + 1];

  if (!nextSlug) {
    return null;
  }

  return getBookExtractBySlug(nextSlug, fields);
}
