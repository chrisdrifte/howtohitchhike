import dynamic from 'next/dynamic';

import generateFeaturedPost from '../api-client/generateFeaturedPost';
import generateSuggestedPost from '../api-client/generateSuggestedPost';
import { getAllBlogPosts } from '../api-ssr/blogPosts';
import { getAllBookExtracts } from '../api-ssr/bookExtracts';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import PageHome from '../components/PageHome';
import useReadHistory from '../hooks/useReadHistory';
import BlogPost from '../models/BlogPost';
import BookExtract from '../models/BookExtract';
import Post from '../models/Post';

const SuggestedPost = dynamic(
  () => import("../components-dynamic/SuggestedPost"),
  {
    ssr: false,
  }
);

type Props = {
  featuredPost?: Post;
  blogPosts: BlogPost[];
  bookExtracts: BookExtract[];
};

export default function Index({
  featuredPost,
  blogPosts,
  bookExtracts,
}: Props) {
  return (
    <Layout>
      <Meta />
      <SuggestedPost posts={[...blogPosts, ...bookExtracts]} />
      <PageHome
        featuredPost={featuredPost}
        blogPosts={blogPosts}
        bookExtracts={bookExtracts}
      />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const featuredPost = generateFeaturedPost();
  const filterNotFeatured = ({ slug }) => slug !== featuredPost.slug;

  const blogPosts = getAllBlogPosts().filter(filterNotFeatured);
  const bookExtracts = getAllBookExtracts().filter(filterNotFeatured);

  console.log(bookExtracts[1]);

  return {
    props: { featuredPost, blogPosts, bookExtracts },
  };
};
