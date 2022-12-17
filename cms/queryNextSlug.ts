import LocalizedContentQuery from '../models/LocalizedContentQuery';
import querySlugs from './querySlugs';

type NextSlugQuery = Pick<LocalizedContentQuery, "type" | "locale" | "slug">;

/**
 * Get the slug of the next content of same type
 */
async function queryNextSlug({ type, locale, slug }: NextSlugQuery) {
  const slugs = await querySlugs({ type, locale });
  const nextSlug = slugs[slugs.indexOf(slug) + 1];
  return nextSlug;
}

export default queryNextSlug;
