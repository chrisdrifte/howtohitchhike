import memoize from 'lodash.memoize';

import BlogPost from '../models/BlogPost';
import ContentType from '../models/ContentType';
import LocalizedContentQuery from '../models/LocalizedContentQuery';
import markdownToHtml from '../utility/markdownToHtml';
import getContentURI from './getContentURI';
import getKey from './getKey';
import queryContributor from './queryContributor';
import queryPost from './queryPost';

type BlogPostQuery = Pick<LocalizedContentQuery, "locale" | "slug">;

/**
 * Get blog post by locale and slug
 */
const queryBlogPost = memoize(async function ({
  locale,
  slug,
}: BlogPostQuery): Promise<BlogPost> {
  const type = ContentType.BlogPost;
  const path = getContentURI({ type, slug });
  const post = await queryPost({ type, locale, slug });

  // @todo verify data from post

  return (
    post && {
      type,
      locale,
      slug,
      path,
      title: post.title || null,
      coverImage: post.coverImage || null,
      ogImage: { url: post.coverImage },
      excerpt: post.excerpt || null,
      content: (await markdownToHtml(`${post.content || ""}`)) || null,
      date: post.date || null,
      author: (await queryContributor({ slug: post.author })) || null,
      translationSlug: post.translationSlug || null,
      translator: (await queryContributor({ slug: post.translator })) || null,
    }
  );
},
getKey);

export default queryBlogPost;
