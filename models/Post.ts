import Contributor from "./Contributor";
import LocalizedContent from "./LocalizedContent";
import OgImage from "./OgImage";

interface Post extends LocalizedContent {
  path: string;
  fullPath: string;
  title: string;
  coverImage: string;
  ogImage?: OgImage;
  excerpt: string;
  content: string;
  translationSlug?: string;
  translator?: Contributor;
}

export default Post;
