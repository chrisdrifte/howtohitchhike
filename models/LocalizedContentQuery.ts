import ContentQuery from './ContentQuery';

interface LocalizedContentQuery extends ContentQuery {
  locale: string;
}

export default LocalizedContentQuery;
