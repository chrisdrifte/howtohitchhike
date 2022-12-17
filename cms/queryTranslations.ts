import ContentQuery from '../models/ContentQuery';
import queryTranslationsMap from './queryTranslationsMap';

type TranslationsQuery = Pick<ContentQuery, "type" | "slug">;

/**
 * Get all translations of a certain type and slug
 */
const queryTranslations = async function ({ type, slug }: TranslationsQuery) {
  const translations = await queryTranslationsMap();
  return translations.get(type)?.get(slug) || null;
};

export default queryTranslations;
