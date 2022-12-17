import memoize from 'lodash.memoize';

import ContentType from '../models/ContentType';
import LocalizedContentQuery from '../models/LocalizedContentQuery';
import sortByPageNumberAsc from '../utility/sortByPageNumberAsc';
import getKey from './getKey';
import queryBookExtract from './queryBookExtract';
import queryPosts from './queryPosts';

type BookExtractsQuery = Pick<LocalizedContentQuery, "locale">;

/**
 * Get book extracts by locale
 */
const queryBookExtracts = memoize(async function ({
  locale,
}: BookExtractsQuery) {
  const type = ContentType.BookExtract;
  const bookExtracts = await queryPosts({ type, locale }, queryBookExtract);
  return bookExtracts.sort(sortByPageNumberAsc);
},
getKey);

export default queryBookExtracts;
