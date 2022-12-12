import { getContentDir } from '../api-client/getContentDir';
import { getContentPath } from '../api-client/getContentPath';
import BlogPost from '../models/BlogPost';
import { ContentType } from '../models/Content';
import markdownToHtml from '../utility/markdownToHtml';
import parseMarkdownFile from '../utility/parseMarkdownFile';
import { sortByDateDesc } from '../utility/sortByDateDesc';
import { getContributorBySlug } from './contributors';
import { getSlugs } from './slugs';

export function getBlogPostBySlug(slug: string) {
  const data = parseMarkdownFile(getContentDir(ContentType.BlogPost), slug);

  if (!data) {
    return;
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
  };

  return blogPost;
}

export function getAllBlogPosts() {
  const blogPosts = getSlugs(ContentType.BlogPost)
    .map(getBlogPostBySlug)
    .sort(sortByDateDesc);

  return blogPosts;
}

export async function enhanceBlogPost(blogPost: BlogPost) {
  if (!blogPost) return null;

  return {
    ...blogPost,
    content: await markdownToHtml(`${blogPost.content || ""}`),
    contributor: {
      ...blogPost.author,
      content: await markdownToHtml(`${blogPost.author.content || ""}`),
    },
  };
}
