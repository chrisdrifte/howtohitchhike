import { BLOG_URL } from '../config';
import { getAllPosts } from './posts';

export function getSiteMapUrls() {
  return getAllPosts()
    .map(({ path }) => path)
    .map(
      (path) => `
        <url>
          <loc>${BLOG_URL + path}</loc>
          <changefreq>hourly</changefreq>
        </url>`
    )
    .join();
}
