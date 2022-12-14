import Contributor from './Contributor';

export interface Translation {
  locale: string;
  translationSource: string;
  translator: Contributor;
}
