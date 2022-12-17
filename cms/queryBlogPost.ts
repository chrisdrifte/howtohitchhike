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
const queryBlogPost = memoize(
  async function ({ locale, slug }: BlogPostQuery): Promise<BlogPost> {
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
        title: post.title,
        coverImage: post.coverImage,
        ogImage: { url: post.coverImage },
        excerpt: post.excerpt,
        content: await markdownToHtml(`${post.content || ""}`),
        date: post.date,
        author: await queryContributor({ slug: post.author }),
        translationSource: post.translationSource || null,
        translator: await queryContributor({ slug: post.translator }),
      }
    );
  },
  // resolver
  getKey
);

export default queryBlogPost;
