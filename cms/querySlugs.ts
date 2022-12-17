import memoize from 'lodash.memoize';

import LocalizedContentQuery from '../models/LocalizedContentQuery';
import getMarkdownFilesFromDirectory from '../utility/getMarkdownFilesFromDirectory';
import getContentDir from './getContentDir';
import getKey from './getKey';

type SlugsQuery = Pick<LocalizedContentQuery, "type" | "locale">;

/**
 * Get all slugs in a certain type and locale
 */
const querySlugs = memoize(async function ({ type, locale }: SlugsQuery) {
  const contentDir = getContentDir({ type, locale });
  const slugs = await getMarkdownFilesFromDirectory(contentDir);

  return slugs;
});

export default querySlugs;
