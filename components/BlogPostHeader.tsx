import { ContentType } from '../models/Content';
import Contributor from '../models/Contributor';
import CoverImage from './CoverImage';
import Credit from './Credit';
import DateFormatter from './DateFormatter';
import PostTitle from './PostTitle';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Contributor;
};

const BlogPostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Credit
          title={author.title}
          picture={author.picture}
          instagram={author.instagram}
          website={author.website}
        />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage
          type={ContentType.BlogPost}
          title={title}
          src={coverImage}
          loading="eager"
        />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Credit
            title={author.title}
            picture={author.picture}
            instagram={author.instagram}
            website={author.website}
          />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default BlogPostHeader;
