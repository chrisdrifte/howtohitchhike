import BlogPost from '../models/BlogPost';
import BookExtract from '../models/BookExtract';
import { ContentType } from '../models/Content';
import { getAllBlogPosts } from './blogPosts';
import { getAllBookExtracts } from './bookExtracts';
import { getSlugs } from './slugs';

export function getPostSlugs() {
  return [...getSlugs(ContentType.BlogPost), getSlugs(ContentType.BookExtract)];
}

export function getAllPosts(): (BlogPost | BookExtract)[] {
  const blogPosts = getAllBlogPosts();
  const bookExtracts = getAllBookExtracts();
  const posts = [...blogPosts, ...bookExtracts];

  return posts;
}
