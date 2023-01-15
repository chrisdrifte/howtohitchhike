import { i18n } from "../next.config";

/**
 * Get relative URI with localized prefix (eg. `/de`)
 */
function getLocalizedURI(locale: string, path: string) {
  return locale === i18n.defaultLocale ? path : `/${locale}` + path;
}

export default getLocalizedURI;
