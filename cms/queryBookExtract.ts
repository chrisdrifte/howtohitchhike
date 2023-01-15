import BookExtract from "../models/BookExtract";
import ContentType from "../models/ContentType";
import LocalizedContentQuery from "../models/LocalizedContentQuery";
import { i18n } from "../next.config";
import markdownToHtml from "../utility/markdownToHtml";
import getContentURI from "./getContentURI";
import getLocalizedURI from "./getLocalizedURI";
import queryContributor from "./queryContributor";
import queryPost from "./queryPost";

type BookExtractQuery = Pick<LocalizedContentQuery, "locale" | "slug">;

/**
 * Get book extract by locale and slug
 */
const queryBookExtract = async function ({
  locale,
  slug,
}: BookExtractQuery): Promise<BookExtract> {
  const type = ContentType.BookExtract;
  const path = getContentURI({ type, slug });
  const fullPath = getLocalizedURI(locale, path);

  const post = await queryPost({ type, locale, slug });

  // @todo verify data from post

  return (
    post && {
      type,
      locale,
      slug,
      path,
      fullPath,
      title: post.title || null,
      coverImage: post.coverImage || null,
      ogImage: { url: post.coverImage },
      excerpt: post.excerpt || null,
      content: (await markdownToHtml(`${post.content || ""}`)) || null,
      pageNumber: parseInt(post.pageNumber) || null,
      translationSlug: post.translationSlug || null,
      translator: (await queryContributor({ slug: post.translator })) || null,
    }
  );
};

export default queryBookExtract;
