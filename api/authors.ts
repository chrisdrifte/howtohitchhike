import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

import { AUTHORS_DIR } from "../config";

const authorDirectory = join(process.cwd(), `_${AUTHORS_DIR}`);

export function getAuthorSlugs() {
  if (!fs.existsSync(authorDirectory)) return [];
  return fs
    .readdirSync(authorDirectory)
    .map((slug) => slug.replace(/\.md$/, ""));
}

export function getAuthorBySlug(slug: string, fields: string[] = []) {
  const fullPath = join(authorDirectory, `${slug}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {
    type: "author",
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

export function getAllAuthors(fields: string[] = []) {
  const slugs = getAuthorSlugs();
  const authors = slugs
    .map((slug) => getAuthorBySlug(slug, fields))
    // sort authors by name in descending order
    .sort((post1, post2) => (post1.name > post2.name ? -1 : 1));
  return authors;
}
