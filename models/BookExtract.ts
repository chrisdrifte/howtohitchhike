import Post from './Post';
import { Translated } from './Translation';

export default interface BookExtract extends Post, Partial<Translated> {
  pageNumber: number;
}
