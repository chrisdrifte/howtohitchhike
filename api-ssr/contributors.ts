import { getContentDir } from '../api-client/getContentDir';
import { ContentType } from '../models/Content';
import Contributor from '../models/Contributor';
import markdownToHtml from '../utility/markdownToHtml';
import parseMarkdownFile from '../utility/parseMarkdownFile';
import { sortByTitleDesc } from '../utility/sortByTitle';
import { getSlugs } from './slugs';

export function getContributorBySlug(slug: string) {
  const data = parseMarkdownFile(getContentDir(ContentType.Contributor), slug);

  if (!data) {
    return;
  }

  const contributor: Contributor = {
    type: ContentType.Contributor,
    title: data.title,
    picture: data.picture,
    instagram: data.instagram,
    website: data.website,
    content: data.content,
  };

  return contributor;
}

export function getAllContributors() {
  const contributors = getSlugs(ContentType.Contributor)
    .map(getContributorBySlug)
    .sort(sortByTitleDesc);
  return contributors;
}

export async function enhanceContributor(contributor: Contributor) {
  if (!contributor) return null;

  return {
    ...contributor,
    content: await markdownToHtml(`${contributor.content || ""}`),
  };
}
