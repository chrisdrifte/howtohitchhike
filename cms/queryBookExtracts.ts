import ContentType from '../models/ContentType';
import LocalizedContentQuery from '../models/LocalizedContentQuery';
import sortByPageNumberAsc from '../utility/sortByPageNumberAsc';
import queryBookExtract from './queryBookExtract';
import queryPosts from './queryPosts';

type BookExtractsQuery = Pick<LocalizedContentQuery, "locale">;

/**
 * Get book extracts by locale
 */
async function queryBookExtracts({ locale }: BookExtractsQuery) {
  const type = ContentType.BookExtract;
  const bookExtracts = await queryPosts({ type, locale }, queryBookExtract);
  return bookExtracts.sort(sortByPageNumberAsc);
}

export default queryBookExtracts;
