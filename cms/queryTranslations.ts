import ContentQuery from '../models/ContentQuery';
import queryTranslationMap from './queryTranslationsMap';

type TranslationsQuery = Pick<ContentQuery, "type" | "slug">;

/**
 * Get all translations of a certain type and slug
 */
const queryTranslations = async function ({ type, slug }: TranslationsQuery) {
  const translations = await queryTranslationMap({ type });
  return translations.get(slug) || null;
};

export default queryTranslations;
