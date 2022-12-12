export enum ContentType {
  Contributor = "Contributor",
  BlogPost = "BlogPost",
  BookExtract = "BookExtract",
}

export interface Content {
  type: ContentType;
}
