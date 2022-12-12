import { ContentType } from '../../models/Content';
import Contributor from '../../models/Contributor';
import sampleContributorJpg from './sampleContributor.jpg';

export const sampleContributor: Contributor = {
  type: ContentType.Contributor,
  title: "Chris Drifte",
  picture: sampleContributorJpg.toString(),
};
