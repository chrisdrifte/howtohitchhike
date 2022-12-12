import { BLOG_POSTS_DIR, BLOG_URL, BOOK_EXTRACTS_DIR } from "../config";
import { getBlogPostSlugs } from "./blogPosts";
import { getBookExtractSlugs } from "./bookExtracts";

export function getAllRoutes() {
  return [
    // ...getAuthorSlugs().map((slug) => `${AUTHORS_DIR}/${slug}`),
    ...getBlogPostSlugs().map((slug) => `${BLOG_POSTS_DIR}/${slug}`),
    ...getBookExtractSlugs().map((slug) => `${BOOK_EXTRACTS_DIR}/${slug}`),
  ];
}

export function getSiteMapUrls() {
  return getAllRoutes()
    .map(
      (route) => `
        <url>
          <loc>${`${BLOG_URL}/${route}`}</loc>
          <changefreq>hourly</changefreq>
        </url>`
    )
    .join();
}
