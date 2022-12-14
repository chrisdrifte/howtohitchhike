import Post from './Post';
import { Translation } from './Translation';

export default interface BookExtract extends Post, Partial<Translation> {
  pageNumber: number;
}
