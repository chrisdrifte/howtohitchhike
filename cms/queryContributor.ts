import ContentQuery from '../models/ContentQuery';
import ContentType from '../models/ContentType';
import Contributor from '../models/Contributor';
import markdownToHtml from '../utility/markdownToHtml';
import parseMarkdownFile from '../utility/parseMarkdownFile';
import getContentDir from './getContentDir';

type ContributorQuery = Pick<ContentQuery, "slug">;

/**
 * Get contributor by slug
 */
const queryContributor = async function ({
  slug,
}: ContributorQuery): Promise<Contributor> {
  const type = ContentType.Contributor;
  const dir = getContentDir({ type });
  const post = await parseMarkdownFile(dir, slug);

  // @todo verify data from post

  return (
    post && {
      type,
      slug,
      title: post.title,
      picture: post.picture || null,
      instagram: post.instagram || null,
      linkedIn: post.linkedIn || null,
      website: post.website || null,
      content: await markdownToHtml(`${post.content || ""}`),
    }
  );
};

export default queryContributor;
