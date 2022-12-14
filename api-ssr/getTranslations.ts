import { getContentPath } from '../api-client/getContentPath';
import { ContentType } from '../models/Content';
import { Translation } from '../models/Translation';
import { i18n } from '../next.config';
import { getBlogPostBySlug } from './blogPosts';
import { getBookExtractBySlug } from './bookExtracts';
import { getSlugs } from './slugs';

export function getTranslations(type: ContentType) {
  const translationMap = new Map<string, Translation[]>();

  i18n.locales
    .map((locale) => getSlugs(type, locale).map((slug) => [locale, slug]))
    .flat()
    .forEach(([locale, slug]) => {
      let source = slug;

      switch (type) {
        case ContentType.BlogPost: {
          const data = getBlogPostBySlug(slug, locale);
          source = data.translationSource || slug;
          break;
        }

        case ContentType.BookExtract: {
          const data = getBookExtractBySlug(slug, locale);
          source = data.translationSource || slug;
          break;
        }
      }

      if (!translationMap.has(source)) {
        translationMap.set(source, []);
      }

      const sources = translationMap.get(source);
      const path = getContentPath(type, slug);
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

  return translationMap;
}
