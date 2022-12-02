import OgImage from './ogImage';

type Post = {
  slug: string;
  title: string;
  coverImage: string;
  ogImage?: OgImage;
  excerpt: string;
  content: string;
};

export default Post;
