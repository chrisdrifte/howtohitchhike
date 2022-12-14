import Contributor from './Contributor';
import Post from './Post';
import { Translated } from './Translation';

interface BlogPost extends Post, Partial<Translated> {
  date: string;
  author: Contributor;
}

export default BlogPost;
