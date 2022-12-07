import BookExtract from "../interfaces/BookExtract";
import BookExtractHeader from "./BookExtractHeader";
import BookExtractPreview from "./BookExtractPreview";
import Container from "./Container";
import Header from "./Header";
import KeepReading from "./KeepReading";
import PostBody from "./PostBody";
import SectionSeparator from "./SectionSeparator";

type Props = {
  bookExtract?: BookExtract;
  nextBookExtract?: Pick<BookExtract, "title" | "slug">;
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
      <KeepReading />
    </>
  );
}