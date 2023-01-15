import BookExtract from "../../models/BookExtract";
import ContentType from "../../models/ContentType";
import { samplePost } from "./samplePost";

export const sampleBookExtract: BookExtract = {
  type: ContentType.BookExtract,
  locale: samplePost.locale,
  slug: samplePost.slug,
  path: samplePost.path,
  fullPath: samplePost.fullPath,
  title: samplePost.title,
  coverImage: samplePost.coverImage,
  ogImage: samplePost.ogImage,
  content: samplePost.content,
  excerpt: samplePost.excerpt,
  pageNumber: 42,
};
