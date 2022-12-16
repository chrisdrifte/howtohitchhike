import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import generateFeaturedPost from '../cms/generateFeaturedPost';
import getBlogPosts from '../cms/getBlogPosts';
import getBookExtracts from '../cms/getBookExtracts';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import PageHome from '../components/PageHome';
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
  const router = useRouter();

  return (
    <Layout>
      <Meta />
      <SuggestedPost posts={[...blogPosts, ...bookExtracts]} />
      <PageHome
        featuredPost={featuredPost}
        blogPosts={blogPosts}
        bookExtracts={bookExtracts}
        locale={router.locale}
      />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const blogPosts = await getBlogPosts({ locale });
  const bookExtracts = await getBookExtracts({ locale });

  const featuredPost = await generateFeaturedPost([
    ...blogPosts,
    ...bookExtracts,
  ]);

  const filterNotFeatured = ({ slug }) => slug !== featuredPost?.slug;

  return {
    props: {
      featuredPost,
      blogPosts: blogPosts.filter(filterNotFeatured),
      bookExtracts: bookExtracts.filter(filterNotFeatured),
    },
  };
};
