import { i18n } from '../next.config';

type ObjectWithLocale = {
  locale: string;
};

const sortByLocale = (a: ObjectWithLocale, b: ObjectWithLocale) =>
  i18n.locales.indexOf(a.locale) - i18n.locales.indexOf(b.locale);

export default sortByLocale;
