import ContentType from '../models/ContentType';
import sortByPageNumberAsc from '../utility/sortByPageNumberAsc';
import getBookExtract from './getBookExtract';
import getPosts from './getPosts';

type BookExtractsQuery = {
  locale: string;
};

/**
 * Get book extracts by locale
 */
async function getBookExtracts({ locale }: BookExtractsQuery) {
  const type = ContentType.BookExtract;
  const bookExtracts = await getPosts({ type, locale }, getBookExtract);
  return bookExtracts.sort(sortByPageNumberAsc);
}

export default getBookExtracts;
