import BlogPost from '../interfaces/blog-post';
import BookExtract from '../interfaces/book-extract';
import BookExtractPreview from './book-extract-preview';

type Props = {
  bookExtracts: BookExtract[];
};

const MoreBookExtracts = ({ bookExtracts }: Props) => {
  if (!bookExtracts.length) return null;

  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-serif font-bold tracking-tighter leading-tight">
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

export default MoreBookExtracts;
