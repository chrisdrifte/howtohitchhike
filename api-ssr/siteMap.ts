import { BLOG_URL } from '../config';
import { ContentType } from '../models/Content';
import { getTranslations } from './getTranslations';
import { getAllPosts } from './posts';

export function getSiteMapUrls() {
  const translations = new Map([
    [ContentType.BlogPost, getTranslations(ContentType.BlogPost)],
    [ContentType.BookExtract, getTranslations(ContentType.BookExtract)],
  ]);

  return getAllPosts()
    .map((post) => ({
      ...post,
      translations: translations.get(post.type).get(post.slug),
    }))
    .map(
      (post) => `
        <url>
          <loc>${BLOG_URL + post.path}</loc>
          ${post.translations
            .map(
              (translation) => `<xhtml:link
               rel="alternate"
               hreflang="${translation.locale}"
               href="${BLOG_URL + translation.fullPath}" />`
            )
            .join("")}
        </url>`
    )
    .join("");
}
