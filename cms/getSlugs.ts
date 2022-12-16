import memoize from 'lodash.memoize';

import ContentType from '../models/ContentType';
import getMarkdownFilesFromDirectory from '../utility/getMarkdownFilesFromDirectory';
import getContentDir from './getContentDir';
import getKey from './getKey';

type SlugsQuery = {
  type: ContentType;
  locale: string;
};

/**
 * Get all slugs in a certain type and locale
 */
const getSlugs = memoize(
  async function ({ type, locale }: SlugsQuery) {
    const contentDir = getContentDir({ type, locale });
    const slugs = await getMarkdownFilesFromDirectory(contentDir);

    return slugs;
  },
  // resolver
  getKey
);

export default getSlugs;
