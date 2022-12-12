import { getBlogPostBySlug } from '../api-ssr/blogPosts';
import { FEATURED_BLOG_POST_SLUG } from '../config';

function generateFeaturedPost() {
  // hardcoded for now
  const featuredPost = getBlogPostBySlug(FEATURED_BLOG_POST_SLUG);
  return featuredPost;
}

export default generateFeaturedPost;
