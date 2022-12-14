import BookExtract from '../models/BookExtract';
import AsideKeepReading from './AsideKeepReading';
import BookExtractHeader from './BookExtractHeader';
import BookExtractPreview from './BookExtractPreview';
import Container from './Container';
import Credit from './Credit';
import Header from './Header';
import PostBody from './PostBody';
import SectionSeparator from './SectionSeparator';

type Props = {
  bookExtract?: BookExtract;
  nextBookExtract?: {
    slug: string;
    title: string;
  };
};

export default function PageBlog({ bookExtract, nextBookExtract }: Props) {
  return (
    <>
      <Container>
        <Header />
        <article className="mb-32">
          <BookExtractHeader
            title={bookExtract.title}
            coverImage={bookExtract.coverImage}
          />

          {bookExtract.translator && (
            <div className="max-w-2xl mx-auto mt-14 bg-neutral-50 p-5 flex flex-col items-center ">
              <strong className="mb-2">Translated by</strong>
              <Credit
                title={bookExtract.translator.title}
                picture={bookExtract.translator.picture}
                instagram={bookExtract.translator.instagram}
                website={bookExtract.translator.website}
              />
              {bookExtract.translator.content && (
                <div
                  className="m-5"
                  dangerouslySetInnerHTML={{
                    __html: bookExtract.translator.content,
                  }}
                />
              )}
            </div>
          )}

          <PostBody content={bookExtract.content} />
          {nextBookExtract && (
            <div className="max-w-2xl mx-auto">
              <SectionSeparator />
              <h3 className="text-3xl font-serif font-bold tracking-tighter leading-tight">
                Next chapter
              </h3>
              <BookExtractPreview
                title={nextBookExtract.title}
                slug={nextBookExtract.slug}
              />
            </div>
          )}
        </article>
      </Container>
      <AsideKeepReading />
    </>
  );
}
