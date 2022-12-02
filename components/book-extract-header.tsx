import { BOOK_EXTRACTS_DIR } from '../lib/constants';
import CoverImage from './cover-image';
import PostTitle from './post-title';

type Props = {
  title: string;
  coverImage: string;
};

const BookExtractHeader = ({ title, coverImage }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} dir={BOOK_EXTRACTS_DIR} src={coverImage} />
      </div>
    </>
  );
};

export default BookExtractHeader;
