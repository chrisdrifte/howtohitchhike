import memoize from 'lodash.memoize';

import BookExtract from '../models/BookExtract';
import ContentType from '../models/ContentType';
import markdownToHtml from '../utility/markdownToHtml';
import getContentURI from './getContentURI';
import getContributor from './getContributor';
import getKey from './getKey';
import getPost from './getPost';

type BookExtractQuery = {
  locale: string;
  slug: string;
};

/**
 * Get book extract by locale and slug
 */
const getBookExtract = memoize(
  async function ({ locale, slug }: BookExtractQuery): Promise<BookExtract> {
    const type = ContentType.BookExtract;
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
        pageNumber: parseInt(post.pageNumber),
        translationSource: post.translationSource || null,
        translator: await getContributor({ slug: post.translator }),
      }
    );
  },
  // resolver
  getKey
);

export default getBookExtract;
