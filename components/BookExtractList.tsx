import BlogPost from "../interfaces/BlogPost";
import BookExtract from "../interfaces/BookExtract";
import BookExtractPreview from "./BookExtractPreview";
import SectionHeading from "./SectionHeading";

type Props = {
  bookExtracts: BookExtract[];
};

const BookExtractList = ({ bookExtracts }: Props) => {
  if (!(bookExtracts instanceof Array) || !bookExtracts.length) return null;

  return (
    <section>
      <SectionHeading>From the book</SectionHeading>
      <div className="grid grid-cols-1 mb-32">
        {bookExtracts.map((bookExtract) => (
          <BookExtractPreview
            key={bookExtract.slug}
            title={bookExtract.title}
            slug={bookExtract.slug}
          />
        ))}
      </div>
    </section>
  );
};

export default BookExtractList;
