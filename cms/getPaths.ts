import ContentType from '../models/ContentType';
import { i18n } from '../next.config';
import getSlugs from './getSlugs';

/**
 * Return all paths for a given content type
 */
async function getPaths(type: ContentType) {
  let paths = [];

  for (const locale of i18n.locales) {
    const slugsInLocale = await getSlugs({ type, locale });
    const pathsInLocale = slugsInLocale.map((slug) => ({ locale, slug }));
    paths = [...paths, ...pathsInLocale];
  }

  return paths;
}

export default getPaths;
