import ErrorPage from 'next/error';
import { useRouter } from 'next/router';

import { enhanceBlogPost, getAllBlogPosts, getBlogPostBySlug } from '../../api-ssr/blogPosts';
import { enhanceBookExtract, getAllBookExtracts } from '../../api-ssr/bookExtracts';
import { getNextSlug } from '../../api-ssr/slugs';
import Layout from '../../components/Layout';
import Meta from '../../components/Meta';
import NoticeSuggestedPost from '../../components/NoticeSuggestedPost';
import PageBlog from '../../components/PageBlog';
import PostTitle from '../../components/PostTitle';
import StructuredData from '../../components/StructuredData';
import useReadHistory from '../../hooks/useReadHistory';
import BlogPost from '../../models/BlogPost';
import { ContentType } from '../../models/Content';
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
};

export async function getStaticProps({ params }: Params) {
  const blogPost = getBlogPostBySlug(params.slug);
  const nextSlug = getNextSlug(ContentType.BlogPost, params.slug);

  const nextBlogPost = getBlogPostBySlug(nextSlug);

  let nextPostEnhanced;
  if (nextBlogPost) {
    nextPostEnhanced = await enhanceBlogPost(nextBlogPost);
  } else {
    const firstBookExtract = getAllBookExtracts()[0];
    if (firstBookExtract) {
      nextPostEnhanced = await enhanceBookExtract(firstBookExtract);
    }
  }

  return {
    props: {
      blogPost: await enhanceBlogPost(blogPost),
      nextPost: nextPostEnhanced,
    },
  };
}

export async function getStaticPaths() {
  const blogPosts = getAllBlogPosts();

  return {
    paths: blogPosts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
