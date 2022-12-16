import { BLOG_URL } from '../config';
import ContentType from '../models/ContentType';
import { i18n } from '../next.config';
import getBlogPosts from './getBlogPosts';
import getBookExtracts from './getBookExtracts';
import getTranslationMap from './getTranslationsMap';

type SiteMapPage = {
  uri: string;
  translations: { locale: string; uri: string }[];
};

/**
 * Get all pages that should appear in the site map
 */
async function getSiteMapPages(): Promise<SiteMapPage[]> {
  const translations = new Map([
    [
      ContentType.BlogPost,
      await getTranslationMap({ type: ContentType.BlogPost }),
    ],
    [
      ContentType.BookExtract,
      await getTranslationMap({ type: ContentType.BookExtract }),
    ],
  ]);

  const promises = i18n.locales.map(async (locale) => [
    ...(await getBlogPosts({ locale })),
    ...(await getBookExtracts({ locale })),
  ]);

  const posts = (await Promise.all(promises)).flat();

  return posts.map((post) => ({
    uri: BLOG_URL + post.path,
    translations: (translations.get(post.type).get(post.slug) || []).map(
      (translation) => ({
        locale: translation.locale,
        uri: BLOG_URL + translation.fullPath,
      })
    ),
  }));
}

export default getSiteMapPages;
