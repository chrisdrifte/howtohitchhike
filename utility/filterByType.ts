import { Content, ContentType } from '../models/Content';

export function filterByType<TResult extends Content>(matchType: ContentType) {
  return (content: Content): content is TResult => content.type === matchType;
}
