import { BLOG_URL } from '../config';
import ContentType from '../models/ContentType';
import { i18n } from '../next.config';
import queryBlogPosts from './queryBlogPosts';
import queryBookExtracts from './queryBookExtracts';
import queryTranslationMap from './queryTranslationsMap';

type SiteMapPage = {
  uri: string;
  translations: { locale: string; uri: string }[];
};

/**
 * Get all pages that should appear in the site map
 */
async function querySiteMapPages(): Promise<SiteMapPage[]> {
  const translations = new Map([
    [
      ContentType.BlogPost,
      await queryTranslationMap({ type: ContentType.BlogPost }),
    ],
    [
      ContentType.BookExtract,
      await queryTranslationMap({ type: ContentType.BookExtract }),
    ],
  ]);

  const promises = i18n.locales.map(async (locale) => [
    ...(await queryBlogPosts({ locale })),
    ...(await queryBookExtracts({ locale })),
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

export default querySiteMapPages;
