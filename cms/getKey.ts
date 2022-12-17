import ContentType from '../models/ContentType';

type Props = {
  type?: ContentType;
  locale?: string;
  slug?: string;
};

/**
 * Get unique string identifier usable with the react `key` prop
 */
const getKey = ({ type, locale, slug }: Props) => `${type}:${locale}:${slug}`;

export default getKey;
