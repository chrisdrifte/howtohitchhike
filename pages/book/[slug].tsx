import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';

import BookExtractHeader from '../../components/book-extract-header';
import Container from '../../components/container';
import Header from '../../components/header';
import Layout from '../../components/layout';
import PostBody from '../../components/post-body';
import PostTitle from '../../components/post-title';
import { getAllBookExtracts, getBookExtractBySlug } from '../../lib/api';
import { BLOG_TITLE, DEFAULT_OG_IMAGE_URL } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';

import type BookExtract from "../../interfaces/book-extract";
type Props = {
  post: BookExtract;
  morePosts: BookExtract[];
  preview?: boolean;
};

export default function BookExtractPage({ post, morePosts, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
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
              <BookExtractHeader
                title={post.title}
                coverImage={post.coverImage}
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
  const post = getBookExtractBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

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
  const bookExtracts = getAllBookExtracts(["slug"]);

  return {
    paths: bookExtracts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
