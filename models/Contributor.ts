import Content from "./Content";

interface Contributor extends Content {
  title: string;
  picture?: string;
  hillfire?: string;
  instagram?: string | string[];
  linkedIn?: string;
  website?: string;
  content?: string;
}

export default Contributor;
