import Contributor from './Contributor';
import Post from './Post';

interface BlogPost extends Post {
  date: string;
  author: Contributor;
}

export default BlogPost;
