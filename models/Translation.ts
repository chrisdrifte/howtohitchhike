import { ContentType } from './Content';
import Contributor from './Contributor';

export interface Translated {
  locale: string;
  translationSource: string;
  translator: Contributor;
}

export type Translation = {
  type: ContentType;
  locale: string;
  slug: string;
  path: string;
};
