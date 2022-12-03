import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

import Author from '../interfaces/author';
import { AUTHORS_DIR, BLOG_POSTS_DIR, BOOK_EXTRACTS_DIR } from './constants';

/**
 * Authors
 */
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

/**
 * Blog Posts
 */
const blogDirectory = join(process.cwd(), `_${BLOG_POSTS_DIR}`);

export function getBlogPostSlugs() {
  if (!fs.existsSync(blogDirectory)) return [];
  return fs.readdirSync(blogDirectory).map((slug) => slug.replace(/\.md$/, ""));
}

export function getBlogPostBySlug(slug: string, fields: string[] = []) {
  const fullPath = join(blogDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string | Items;
  };

  const items: Items = {
    type: "blog-post",
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
    if (field === "author") {
      items[field] = getAuthorBySlug(data[field], ["slug", "name", "picture"]);
    }
  });

  return items;
}

export function getAllBlogPosts(fields: string[] = []) {
  const slugs = getBlogPostSlugs();
  const posts = slugs
    .map((slug) => getBlogPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

/**
 * Book Extracts
 */
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

/**
 * Site map
 */

export function getSiteMapUrls(url: string) {
  return [
    "",
    // ...getAuthorSlugs().map((slug) => `${AUTHORS_DIR}/${slug}`),
    ...getBlogPostSlugs().map((slug) => `${BLOG_POSTS_DIR}/${slug}`),
    ...getBookExtractSlugs().map((slug) => `${BOOK_EXTRACTS_DIR}/${slug}`),
  ]
    .map(
      (route) => `
      <url>
        <loc>${`${url}/${route}`}</loc>
        <changefreq>hourly</changefreq>
      </url>`
    )
    .join();
}
