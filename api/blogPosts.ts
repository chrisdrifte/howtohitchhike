import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

import { BLOG_POSTS_DIR } from "../config";
import { getAuthorBySlug } from "./authors";

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
