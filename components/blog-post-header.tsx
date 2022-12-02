import { BLOG_POSTS_DIR } from '../lib/constants';
import Avatar from './avatar';
import CoverImage from './cover-image';
import DateFormatter from './date-formatter';
import PostTitle from './post-title';

import type Author from "../interfaces/author";
type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const BlogPostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} dir={BLOG_POSTS_DIR} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default BlogPostHeader;
