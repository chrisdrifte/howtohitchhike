import BookExtract from '../../models/BookExtract';
import { ContentType } from '../../models/Content';
import { samplePost } from './samplePost';

export const sampleBookExtract: BookExtract = {
  type: ContentType.BookExtract,
  slug: samplePost.slug,
  path: samplePost.path,
  title: samplePost.title,
  coverImage: samplePost.coverImage,
  ogImage: samplePost.ogImage,
  content: samplePost.content,
  excerpt: samplePost.excerpt,
  pageNumber: 42,
};
