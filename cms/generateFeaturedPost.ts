import { FEATURED_BLOG_POST_SLUG } from '../config';
import BlogPost from '../models/BlogPost';
import BookExtract from '../models/BookExtract';

/**
 * Get the featured post from a list of posts
 */
async function generateFeaturedPost(posts: (BlogPost | BookExtract)[]) {
  // hardcoded via config for now
  const featuredPost = posts.find(
    ({ slug }) => slug === FEATURED_BLOG_POST_SLUG
  );

  return featuredPost || posts[0] || null;
}

export default generateFeaturedPost;
