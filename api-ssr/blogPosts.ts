import { getContentDir } from '../api-client/getContentDir';
import { getContentPath } from '../api-client/getContentPath';
import BlogPost from '../models/BlogPost';
import { ContentType } from '../models/Content';
import { i18n } from '../next.config';
import markdownToHtml from '../utility/markdownToHtml';
import parseMarkdownFile from '../utility/parseMarkdownFile';
import { sortByDateDesc } from '../utility/sortByDateDesc';
import { getContributorBySlug } from './contributors';
import { getSlugs } from './slugs';

export function getBlogPostBySlug(slug: string, locale: string) {
  if (!slug) {
    return null;
  }

  const data = parseMarkdownFile(
    getContentDir(ContentType.BlogPost, locale),
    slug
  );

  if (!data) {
    return null;
  }

  const blogPost: BlogPost = {
    type: ContentType.BlogPost,
    slug: slug,
    path: getContentPath(ContentType.BlogPost, slug),
    title: data.title,
    coverImage: data.coverImage,
    ogImage: { url: data.coverImage },
    excerpt: data.excerpt,
    content: data.content,
    date: data.date,
    author: getContributorBySlug(data.author),
    locale: locale,
    translationSource: data.translationSource || null,
    translator: getContributorBySlug(data.translator),
  };

  return blogPost;
}

export function getAllBlogPosts(locale: string) {
  const blogPosts = getSlugs(ContentType.BlogPost, locale)
    .map((slug) => getBlogPostBySlug(slug, locale))
    .sort(sortByDateDesc);

  return blogPosts;
}

export async function enhanceBlogPost(blogPost: BlogPost) {
  if (!blogPost) return null;

  return {
    ...blogPost,
    content: await markdownToHtml(`${blogPost.content || ""}`),
    author: {
      ...blogPost.author,
      content: await markdownToHtml(`${blogPost.author.content || ""}`),
    },
  };
}

export function getBlogPostPaths() {
  const byLocales = i18n.locales.map((locale) =>
    getSlugs(ContentType.BlogPost, locale).map((slug) =>
      getBlogPostBySlug(slug, locale)
    )
  );
  return Object.values(byLocales).flat();
}
