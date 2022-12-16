import memoize from 'lodash.memoize';

import ContentType from '../models/ContentType';
import getTranslationMap from './getTranslationsMap';

type TranslationsQuery = {
  type: ContentType;
  slug: string;
};

/**
 * Get all translations of a certain type and slug
 */
const getTranslations = async function ({ type, slug }: TranslationsQuery) {
  const translations = await getTranslationMap({ type });
  return translations.get(slug) || null;
};

export default getTranslations;
