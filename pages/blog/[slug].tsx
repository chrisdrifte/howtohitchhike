import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';

import BlogPostHeader from '../../components/blog-post-header';
import Container from '../../components/container';
import Header from '../../components/header';
import Layout from '../../components/layout';
import PostBody from '../../components/post-body';
import PostTitle from '../../components/post-title';
import { getAllBlogPosts, getBlogPostBySlug } from '../../lib/api';
import { BLOG_DESCRIPTION, BLOG_TITLE, DEFAULT_OG_IMAGE_URL } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';

import type BlogPost from "../../interfaces/blog-post";

type Props = {
  post: BlogPost;
  morePosts: BlogPost[];
  preview?: boolean;
};

export default function BlogPostPage({ post, morePosts, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Head>
        <meta
          name="description"
          content={post.excerpt || BLOG_DESCRIPTION}
          key="desc"
        />
      </Head>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | {BLOG_TITLE}
                </title>
                <meta
                  property="og:image"
                  content={
                    post.ogImage?.url || post.coverImage || DEFAULT_OG_IMAGE_URL
                  }
                />
              </Head>
              <BlogPostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getBlogPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "excerpt",
    "content",
    "ogImage",
    "coverImage",
  ]);

  const content = await markdownToHtml(post.content.toString() || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const blogPosts = getAllBlogPosts(["slug"]);

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
