import memoize from 'lodash.memoize';

import BookExtract from '../models/BookExtract';
import ContentType from '../models/ContentType';
import LocalizedContentQuery from '../models/LocalizedContentQuery';
import markdownToHtml from '../utility/markdownToHtml';
import getContentURI from './getContentURI';
import getKey from './getKey';
import queryContributor from './queryContributor';
import queryPost from './queryPost';

type BookExtractQuery = Pick<LocalizedContentQuery, "locale" | "slug">;

/**
 * Get book extract by locale and slug
 */
const queryBookExtract = memoize(
  async function ({ locale, slug }: BookExtractQuery): Promise<BookExtract> {
    const type = ContentType.BookExtract;
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
        pageNumber: parseInt(post.pageNumber),
        translationSource: post.translationSource || null,
        translator: await queryContributor({ slug: post.translator }),
      }
    );
  },
  // resolver
  getKey
);

export default queryBookExtract;
