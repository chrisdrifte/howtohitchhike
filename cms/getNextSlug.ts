import ContentType from '../models/ContentType';
import getSlugs from './getSlugs';

type NextSlugQuery = {
  type: ContentType;
  locale: string;
  slug: string;
};

/**
 * Get the slug of the next content of same type
 */
async function getNextSlug({ type, locale, slug }: NextSlugQuery) {
  const slugs = await getSlugs({ type, locale });
  const nextSlug = slugs[slugs.indexOf(slug) + 1];
  return nextSlug;
}

export default getNextSlug;
