import { getContentDir } from '../api-client/getContentDir';
import { ContentType } from '../models/Content';
import getMarkdownFilesFromDirectory from '../utility/getMarkdownFilesFromDirectory';

export function getSlugs(contentType: ContentType) {
  return getMarkdownFilesFromDirectory(getContentDir(contentType));
}

export function getNextSlug(type: ContentType, slug: string) {
  const slugs = getSlugs(type);
  const nextSlug = slugs[slugs.indexOf(slug) + 1];
  return nextSlug;
}
