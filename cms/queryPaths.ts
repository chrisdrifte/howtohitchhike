import ContentQuery from '../models/ContentQuery';
import { i18n } from '../next.config';
import querySlugs from './querySlugs';

type PathsQuery = Pick<ContentQuery, "type">;

/**
 * Return all paths for a given content type
 */
async function queryPaths({ type }: PathsQuery) {
  let paths = [];

  for (const locale of i18n.locales) {
    const slugsInLocale = await querySlugs({ type, locale });
    const pathsInLocale = slugsInLocale.map((slug) => ({ locale, slug }));
    paths = [...paths, ...pathsInLocale];
  }

  return paths;
}

export default queryPaths;
