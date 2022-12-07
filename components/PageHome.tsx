import { BLOG_POSTS_DIR } from "../config";
import BlogPost from "../interfaces/BlogPost";
import BookExtract from "../interfaces/BookExtract";
import BlogPostList from "./BlogPostList";
import BookExtractList from "./BookExtractList";
import Container from "./Container";
import Contribute from "./Contribute";
import Intro from "./Intro";
import KeepReading from "./KeepReading";
import PostHero from "./PostHero";

type Props = {
  featuredBlogPost?: BlogPost;
  blogPosts: BlogPost[];
  bookExtracts: BookExtract[];
};

export default function PageHome({
  featuredBlogPost,
  blogPosts,
  bookExtracts,
}: Props) {
  return (
    <>
      <Container>
        <Intro />
        {featuredBlogPost && (
          <PostHero
            title={featuredBlogPost.title}
            coverImage={featuredBlogPost.coverImage}
            dir={BLOG_POSTS_DIR}
            slug={featuredBlogPost.slug}
            excerpt={featuredBlogPost.excerpt}
          />
        )}
      </Container>
      <Contribute />
      <Container>
        <BlogPostList blogPosts={blogPosts} />
        <BookExtractList bookExtracts={bookExtracts} />
      </Container>
      <KeepReading />
    </>
  );
}
