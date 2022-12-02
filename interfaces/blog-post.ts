import Author from './author';
import Post from './post';

interface BlogPost extends Post {
  date: string;
  author: Author;
}

export default BlogPost;
