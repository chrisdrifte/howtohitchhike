import { BLOG_POSTS_DIR } from '../config';
import Author from '../interfaces/Author';
import CoverImage from './CoverImage';
import Credit from './Credit';
import DateFormatter from './DateFormatter';
import PostTitle from './PostTitle';

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
        <Credit
          name={author.name}
          picture={author.picture}
          instagram={author.instagram}
          website={author.website}
        />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage
          title={title}
          dir={BLOG_POSTS_DIR}
          src={coverImage}
          loading="eager"
        />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Credit name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default BlogPostHeader;
