import { Content } from './Content';
import OgImage from './OgImage';

interface Post extends Content {
  slug: string;
  path: string;
  title: string;
  coverImage: string;
  ogImage?: OgImage;
  excerpt: string;
  content: string;
}

export default Post;
