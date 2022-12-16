import ContentType from '../../models/ContentType';
import Contributor from '../../models/Contributor';
import sampleContributorJpg from './sampleContributor.jpg';

export const sampleContributor: Contributor = {
  slug: "chris-drifte",
  type: ContentType.Contributor,
  title: "Chris Drifte",
  picture: sampleContributorJpg.toString(),
};
