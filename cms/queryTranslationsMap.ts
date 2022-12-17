import memoize from 'lodash.memoize';

import ContentType from '../models/ContentType';
import Translation from '../models/Translation';
import { i18n } from '../next.config';
import sortByLocale from '../utility/sortByLocale';
import getContentURI from './getContentURI';
import queryBlogPost from './queryBlogPost';
import queryBookExtract from './queryBookExtract';
import querySlugs from './querySlugs';

type TranslationsMap = Map<ContentType, SourcesMap>;
type SourcesMap = Map<string, Translation[]>;

/**
 * Generate map of content translations
 */
const queryTranslationsMap = memoize(async function () {
  const translationsMap: TranslationsMap = new Map([
    [ContentType.BlogPost, new Map()],
    [ContentType.BookExtract, new Map()],
  ]);

  const queryByType = {
    [ContentType.BlogPost]: queryBlogPost,
    [ContentType.BookExtract]: queryBookExtract,
  };

  for (const [type, sourcesMap] of translationsMap.entries()) {
    for (const locale of i18n.locales) {
      const slugs = await querySlugs({ type, locale });

      for (const slug of slugs) {
        const data = await queryByType[type]({ locale, slug });
        const sourceSlug = data.translationSlug || slug;

        const translations = sourcesMap.get(sourceSlug) || [];

        const path = getContentURI({ type, slug });
        const fullPath =
          locale === i18n.defaultLocale ? path : `/${locale}` + path;

        const newTranslation: Translation = {
          type,
          locale,
          slug,
          path,
          fullPath,
        };

        // update by reference
        translations.push(newTranslation);

        // add reference to new slug
        sourcesMap.set(slug, translations);
      }
    }

    for (const translations of sourcesMap.values()) {
      translations.sort(sortByLocale);
    }
  }

  return translationsMap;
});

export default queryTranslationsMap;
