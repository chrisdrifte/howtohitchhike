import BlogPost from "../interfaces/BlogPost";
import BookExtract from "../interfaces/BookExtract";
import BookExtractPreview from "./BookExtractPreview";

type Props = {
  bookExtracts: BookExtract[];
};

const BookExtractList = ({ bookExtracts }: Props) => {
  if (!bookExtracts.length) return null;

  return (
    <section>
      <h2 className="mt-16 mb-8 text-5xl md:text-7xl font-serif font-bold tracking-tighter leading-tight">
        From the book
      </h2>
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
