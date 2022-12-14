import { getContentPath } from '../api-client/getContentPath';
import { ContentType } from '../models/Content';
import { Translation } from '../models/Translation';
import { getBlogPostBySlug } from './blogPosts';
import { getBookExtractBySlug } from './bookExtracts';
import { getSlugs } from './slugs';

export function getTranslations(type: ContentType, locales: string[]) {
  const translationMap = new Map<string, Translation[]>();

  locales
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
      sources.push({
        type,
        locale,
        slug: slug,
        path: getContentPath(type, slug),
      });

      if (!translationMap.get(slug)) {
        translationMap.set(slug, sources);
      }
    });

  return translationMap;
}
