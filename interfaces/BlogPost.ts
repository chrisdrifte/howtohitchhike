import Author from './Author';
import Post from './Post';

interface BlogPost extends Post {
  date: string;
  author: Author;
}

export default BlogPost;
