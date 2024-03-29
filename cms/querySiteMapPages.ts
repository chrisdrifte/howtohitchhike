import { BLOG_URL } from "../config";
import { i18n } from "../next.config";
import queryBlogPosts from "./queryBlogPosts";
import queryBookExtracts from "./queryBookExtracts";
import queryTranslationsMap from "./queryTranslationsMap";

type SiteMapPage = {
  uri: string;
  translations: { locale: string; uri: string }[];
};

/**
 * Get all pages that should appear in the site map
 */
async function querySiteMapPages(): Promise<SiteMapPage[]> {
  const translationMap = await queryTranslationsMap();

  const promises = i18n.locales.map(async (locale) => [
    ...(await queryBlogPosts({ locale })),
    ...(await queryBookExtracts({ locale })),
  ]);

  const posts = (await Promise.all(promises)).flat();

  const siteMapPages = posts.map((post) => ({
    uri: BLOG_URL + post.fullPath,
    translations: (translationMap.get(post.type).get(post.slug) || []).map(
      (translation) => ({
        locale: translation.locale,
        uri: BLOG_URL + translation.fullPath,
      })
    ),
  }));

  return siteMapPages;
}

export default querySiteMapPages;
