import memoize from 'lodash.memoize';

import BlogPost from '../models/BlogPost';
import ContentType from '../models/ContentType';
import markdownToHtml from '../utility/markdownToHtml';
import getContentURI from './getContentURI';
import getContributor from './getContributor';
import getKey from './getKey';
import getPost from './getPost';

type BlogPostQuery = {
  locale: string;
  slug: string;
};

/**
 * Get blog post by locale and slug
 */
const getBlogPost = memoize(
  async function ({ locale, slug }: BlogPostQuery): Promise<BlogPost> {
    const type = ContentType.BlogPost;
    const path = getContentURI({ type, slug });
    const post = await getPost({ type, locale, slug });

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
        author: await getContributor({ slug: post.author }),
        translationSource: post.translationSource || null,
        translator: await getContributor({ slug: post.translator }),
      }
    );
  },
  // resolver
  getKey
);

export default getBlogPost;
