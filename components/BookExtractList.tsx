import { getPostKey } from '../api-client/getPostKey';
import BookExtract from '../models/BookExtract';
import BookExtractPreview from './BookExtractPreview';
import SectionHeading from './SectionHeading';

type Props = {
  bookExtracts: BookExtract[];
};

const BookExtractList = ({ bookExtracts }: Props) => {
  if (!(bookExtracts instanceof Array) || !bookExtracts.length) {
    return null;
  }

  return (
    <section>
      <SectionHeading>From the book</SectionHeading>
      <div className="grid grid-cols-1 mb-32">
        {bookExtracts.map((bookExtract) => (
          <BookExtractPreview
            key={getPostKey(bookExtract)}
            slug={bookExtract.slug}
            title={bookExtract.title}
          />
        ))}
      </div>
    </section>
  );
};

export default BookExtractList;
