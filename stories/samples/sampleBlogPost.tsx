import BlogPost from "../../models/BlogPost";
import ContentType from "../../models/ContentType";
import { sampleContributor } from "./sampleContributor";
import { sampleDate } from "./sampleDate";
import { samplePost } from "./samplePost";

export const sampleBlogPost: BlogPost = {
  type: ContentType.BlogPost,
  locale: samplePost.locale,
  slug: samplePost.slug,
  path: samplePost.path,
  fullPath: samplePost.fullPath,
  title: samplePost.title,
  coverImage: samplePost.coverImage,
  ogImage: samplePost.ogImage,
  content: samplePost.content,
  excerpt: samplePost.excerpt,
  date: sampleDate,
  author: sampleContributor,
};
