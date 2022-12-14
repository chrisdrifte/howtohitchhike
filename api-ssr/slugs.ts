import { getContentDir } from '../api-client/getContentDir';
import { ContentType } from '../models/Content';
import getMarkdownFilesFromDirectory from '../utility/getMarkdownFilesFromDirectory';

export function getSlugs(contentType: ContentType, locale: string) {
  return getMarkdownFilesFromDirectory(getContentDir(contentType, locale));
}

export function getNextSlug(type: ContentType, slug: string, locale: string) {
  const slugs = getSlugs(type, locale);
  const nextSlug = slugs[slugs.indexOf(slug) + 1];
  return nextSlug;
}
