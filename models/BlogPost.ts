import Contributor from './Contributor';
import Post from './Post';
import { Translation } from './Translation';

interface BlogPost extends Post, Partial<Translation> {
  date: string;
  author: Contributor;
}

export default BlogPost;
