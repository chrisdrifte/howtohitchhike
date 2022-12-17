import ContentType from './ContentType';

type Translation = {
  type: ContentType;
  locale: string;
  slug: string;
  path: string;
  fullPath: string;
};

export default Translation;
