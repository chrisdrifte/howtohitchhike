import { GetStaticProps } from 'next';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';

import queryBlogPost from '../../cms/queryBlogPost';
import queryBookExtracts from '../../cms/queryBookExtracts';
import queryNextSlug from '../../cms/queryNextSlug';
import queryPaths from '../../cms/queryPaths';
import Layout from '../../components/Layout';
import Meta from '../../components/Meta';
import NoticeSuggestedPost from '../../components/NoticeSuggestedPost';
import PageBlog from '../../components/PageBlog';
import PostTitle from '../../components/PostTitle';
import StructuredData from '../../components/StructuredData';
import useReadHistory from '../../hooks/useReadHistory';
import BlogPost from '../../models/BlogPost';
import ContentType from '../../models/ContentType';
import Post from '../../models/Post';

type Props = {
  blogPost: BlogPost;
  nextPost: Post;
  preview?: boolean;
};

export default function BlogPostPage({ blogPost, nextPost, preview }: Props) {
  const router = useRouter();

  if (!router.isFallback && !blogPost?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  if (router.isFallback) {
    return <PostTitle>Loading...</PostTitle>;
  }

  const readHistory = useReadHistory();
  readHistory.addEntry(blogPost);

  return (
    <Layout preview={preview}>
      <Meta
        title={blogPost.title}
        description={blogPost.excerpt}
        ogImage={blogPost.ogImage?.url || blogPost.coverImage}
      />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: blogPost.title,
          description: blogPost.excerpt,
          author: [
            {
              "@type": "Person",
              name: blogPost.author.title,
              image: blogPost.author.picture,
            },
          ],
          image: blogPost.coverImage,
          datePublished: blogPost.date,
        }}
      />
      {nextPost && (
        <NoticeSuggestedPost
          isFirstSuggestion={false}
          type={nextPost.type}
          slug={nextPost.slug}
          title={nextPost.title}
        />
      )}
      <PageBlog blogPost={blogPost} />
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
  locale: string;
};

export const getStaticProps: GetStaticProps = async ({
  params,
  locale,
}: Params) => {
  const slug = params.slug;

  const blogPost = await queryBlogPost({ locale, slug });
  const nextSlug = await queryNextSlug(blogPost);

  let nextPost: Post =
    (await queryBlogPost({ locale, slug: nextSlug })) ||
    (await queryBookExtracts({ locale }))[0] ||
    null;

  return {
    props: {
      blogPost,
      nextPost,
    },
  };
};

export async function getStaticPaths() {
  const paths = await queryPaths({ type: ContentType.BlogPost });

  return {
    paths: paths.map((path) => {
      return {
        params: {
          slug: path.slug,
        },
        locale: path.locale,
      };
    }),
    fallback: false,
  };
}
