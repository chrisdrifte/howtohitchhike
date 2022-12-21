import BlogPost from '../models/BlogPost';
import AsideContribute from './AsideContribute';
import BlogPostHeader from './BlogPostHeader';
import BookExtractPreview from './BookExtractPreview';
import Container from './Container';
import Credit from './Credit';
import Header from './Header';
import PostBody from './PostBody';
import SectionSeparator from './SectionSeparator';

type Props = {
  blogPost?: BlogPost;
};

export default function PageBlog({ blogPost }: Props) {
  return (
    <>
      <Container>
        <Header />
        {blogPost && (
          <article className="mb-32">
            <BlogPostHeader
              title={blogPost.title}
              coverImage={blogPost.coverImage}
              date={blogPost.date}
              author={blogPost.author}
            />

            <PostBody content={blogPost.content} />

            <div className="max-w-2xl mx-auto mt-14 bg-neutral-50 p-5 flex flex-col items-center ">
              <strong>Words by</strong>
              <Credit
                title={blogPost.author.title}
                picture={blogPost.author.picture}
                instagram={blogPost.author.instagram}
                website={blogPost.author.website}
              />
              {blogPost.author.content && (
                <div
                  className="m-5"
                  dangerouslySetInnerHTML={{
                    __html: blogPost.author.content,
                  }}
                />
              )}
            </div>

            <div className="max-w-2xl mx-auto">
              <SectionSeparator />
              <h3 className="text-3xl font-serif font-bold tracking-tighter leading-tight">
                Read the book for free
              </h3>
              <BookExtractPreview
                title="Rules of Thumb: How to Hitchhike and Live on the Road"
                slug="011-tales-from-the-road-usa"
              />
            </div>
          </article>
        )}
      </Container>
      <AsideContribute />
    </>
  );
}
