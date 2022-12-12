import Layout from '../components/Layout';
import Meta from '../components/Meta';
import PageHome from '../components/PageHome';
import { FEATURED_BLOG_POST_SLUG } from '../config';
import { getAllBlogPosts, getBlogPostBySlug } from '../content-api/blogPosts';
import { getAllBookExtracts } from '../content-api/bookExtracts';
import BlogPost from '../interfaces/BlogPost';
import BookExtract from '../interfaces/BookExtract';

type Props = {
  featuredBlogPost?: BlogPost;
  blogPosts: BlogPost[];
  bookExtracts: BookExtract[];
};

export default function Index({
  featuredBlogPost,
  blogPosts,
  bookExtracts,
}: Props) {
  return (
    <Layout>
      <Meta />
      <PageHome
        featuredBlogPost={featuredBlogPost}
        blogPosts={blogPosts}
        bookExtracts={bookExtracts}
      />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const featuredBlogPost = getBlogPostBySlug(FEATURED_BLOG_POST_SLUG);
  const blogPosts = getAllBlogPosts().filter(
    ({ slug }) => slug !== featuredBlogPost.slug
  );
  const bookExtracts = getAllBookExtracts();

  return {
    props: { featuredBlogPost, blogPosts, bookExtracts },
  };
};
