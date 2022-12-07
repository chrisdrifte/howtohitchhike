import BookExtract from '../../interfaces/BookExtract';
import { samplePost } from './samplePost';

export const sampleBookExtract: BookExtract = {
  slug: samplePost.slug,
  title: samplePost.title,
  coverImage: samplePost.coverImage,
  ogImage: samplePost.ogImage,
  content: samplePost.content,
  excerpt: samplePost.excerpt,
  pageNumber: 42,
};
