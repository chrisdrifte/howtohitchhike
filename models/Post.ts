import Content from './Content';
import Contributor from './Contributor';
import LocalizedContent from './LocalizedContent';
import OgImage from './OgImage';

interface Post extends LocalizedContent {
  path: string;
  title: string;
  coverImage: string;
  ogImage?: OgImage;
  excerpt: string;
  content: string;
  translationSource?: string;
  translator?: Contributor;
}

export default Post;
