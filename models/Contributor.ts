import Content from './Content';

interface Contributor extends Content {
  title: string;
  picture?: string;
  instagram?: string;
  linkedIn?: string;
  website?: string;
  content?: string;
}

export default Contributor;
