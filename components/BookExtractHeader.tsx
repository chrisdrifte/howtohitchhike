import { BOOK_EXTRACTS_DIR } from "../config";
import CoverImage from "./CoverImage";
import PostTitle from "./PostTitle";

type Props = {
  title: string;
  coverImage: string;
};

const BookExtractHeader = ({ title, coverImage }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage
          title={title}
          dir={BOOK_EXTRACTS_DIR}
          src={coverImage}
          loading="eager"
        />
      </div>
    </>
  );
};

export default BookExtractHeader;