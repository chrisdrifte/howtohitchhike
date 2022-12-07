import BlogPost from '../../interfaces/BlogPost';
import { sampleAuthor } from './sampleAuthor';
import { sampleDate } from './sampleDate';
import { samplePost } from './samplePost';

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
