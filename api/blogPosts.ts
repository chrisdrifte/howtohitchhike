import { BLOG_POSTS_DIR } from "../config";
import BlogPost from "../interfaces/BlogPost";
import getMarkdownFilesFromDirectory from "../utility/getMarkdownFilesFromDirectory";
import parseMarkdownFile from "../utility/parseMarkdownFile";
import { sortByDateDesc } from "../utility/sortByDateDesc";
import { getAuthorBySlug } from "./authors";

const blogPostsContentDir = `_${BLOG_POSTS_DIR}`;

export function getBlogPostSlugs() {
  const blogPosts = getMarkdownFilesFromDirectory(blogPostsContentDir);
  return blogPosts;
}

export function getBlogPostBySlug(slug: string) {
  const data = parseMarkdownFile(blogPostsContentDir, slug);

  const blogPost: BlogPost = {
    slug: slug,
    title: data.title,
    coverImage: data.coverImage,
    ogImage: { url: data.coverImage },
    excerpt: data.excerpt,
    content: data.content,
    date: data.date,
    author: getAuthorBySlug(data.author),
  };

  return blogPost;
}

export function getAllBlogPosts() {
  const blogPosts = getBlogPostSlugs()
    .map(getBlogPostBySlug)
    .sort(sortByDateDesc);

  return blogPosts;
}
