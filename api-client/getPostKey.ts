import Post from '../models/Post';

export const getPostKey = ({ type, slug }: Pick<Post, "type" | "slug">) =>
  `${type}:${slug}`;
