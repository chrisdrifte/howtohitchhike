import { getAllBlogPosts, getBlogPostBySlug } from '../api-ssr/blogPosts';
import { getAllBookExtracts } from '../api-ssr/bookExtracts';
import { FEATURED_BLOG_POST_SLUG } from '../config';
import { i18n } from '../next.config';

function generateFeaturedPost(locale: string) {
  // en locale hardcoded for now
  if (locale === i18n.defaultLocale) {
    const featuredPost = getBlogPostBySlug(FEATURED_BLOG_POST_SLUG, locale);
    return featuredPost;
  }

  // other locales use first post
  const firstPost = [
    ...getAllBlogPosts(locale),
    ...getAllBookExtracts(locale),
  ][0];

  if (firstPost) {
    return firstPost;
  }

  return null;
}

export default generateFeaturedPost;
