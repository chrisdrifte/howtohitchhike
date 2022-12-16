import memoize from 'lodash.memoize';

import ContentType from '../models/ContentType';
import Translation from '../models/Translation';
import { i18n } from '../next.config';
import getBlogPost from './getBlogPost';
import getBookExtract from './getBookExtract';
import getContentURI from './getContentURI';
import getSlugs from './getSlugs';

type TranslationsMapQuery = {
  type: ContentType;
};

type TranslationMap = Map<string, Translation[]>;

/**
 * Generate a map of content and its translations
 * @todo clean up
 */
const getTranslationMap = memoize(
  async function ({ type }: TranslationsMapQuery) {
    const translationMap: TranslationMap = new Map();

    const postMetaPromises = i18n.locales.map(async (locale) =>
      (await getSlugs({ type, locale })).map((slug) => [locale, slug])
    );

    const postMeta = (await Promise.all(postMetaPromises)).flat();

    const promises = postMeta.map(async ([locale, slug]) => {
      let source = slug;

      switch (type) {
        case ContentType.BlogPost: {
          const data = await getBlogPost({ locale, slug });
          source = data.translationSource || slug;
          break;
        }

        case ContentType.BookExtract: {
          const data = await getBookExtract({ locale, slug });
          source = data.translationSource || slug;
          break;
        }
      }

      if (!translationMap.has(source)) {
        translationMap.set(source, []);
      }

      const sources = translationMap.get(source);
      const path = getContentURI({ type, slug });
      const fullPath =
        locale === i18n.defaultLocale ? path : `/${locale}` + path;

      sources.push({
        type,
        locale,
        slug,
        path,
        fullPath,
      });

      if (!translationMap.get(slug)) {
        translationMap.set(slug, sources);
      }
    });

    // ensure all data is fetched before continuing
    await Promise.all(promises);

    // sort translations
    for (const sources of translationMap.values()) {
      sources.sort(
        (a, b) =>
          i18n.locales.indexOf(a.locale) - i18n.locales.indexOf(b.locale)
      );
    }

    return translationMap;
  },
  // resolver
  (type) => `${type}`
);

export default getTranslationMap;
