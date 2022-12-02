import BlogPost from '../../interfaces/blog-post';
import { sampleAuthor } from './sample-author';
import { sampleDate } from './sample-date';
import { samplePost } from './sample-post';

export const sampleBlogPost: BlogPost = {
  slug: samplePost.slug,
  title: samplePost.title,
  coverImage: samplePost.coverImage,
  ogImage: samplePost.ogImage,
  content: samplePost.content,
  excerpt: samplePost.excerpt,
  date: sampleDate,
  author: sampleAuthor,
};
