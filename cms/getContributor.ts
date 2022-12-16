import ContentType from '../models/ContentType';
import Contributor from '../models/Contributor';
import markdownToHtml from '../utility/markdownToHtml';
import getPost from './getPost';

type ContributorQuery = {
  slug: string;
};

/**
 * Get contributor by slug
 */
const getContributor = async function ({
  slug,
}: ContributorQuery): Promise<Contributor> {
  const type = ContentType.Contributor;
  const post = await getPost({ type, slug });

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

export default getContributor;
