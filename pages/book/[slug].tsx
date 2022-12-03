import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';

import BookExtractHeader from '../../components/book-extract-header';
import BookExtractPreview from '../../components/book-extract-preview';
import Container from '../../components/container';
import Header from '../../components/header';
import Layout from '../../components/layout';
import MoreBookExtracts from '../../components/more-book-extracts';
import PostBody from '../../components/post-body';
import PostTitle from '../../components/post-title';
import SectionSeparator from '../../components/section-separator';
import { getAllBookExtracts, getBookExtractBySlug, getNextBookExtractBySlug } from '../../lib/api';
import { BLOG_DESCRIPTION, BLOG_TITLE, DEFAULT_OG_IMAGE_URL } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';

import type BookExtract from "../../interfaces/book-extract";
type Props = {
  post: BookExtract;
  nextPost?: Pick<BookExtract, "title" | "slug">;
  preview?: boolean;
};

export default function BookExtractPage({ post, nextPost, preview }: Props) {
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
              <BookExtractHeader
                title={post.title}
                coverImage={post.coverImage}
              />
              <PostBody content={post.content} />
              {nextPost && (
                <div className="max-w-2xl mx-auto">
                  <SectionSeparator />
                  <h3 className="text-3xl font-serif font-bold tracking-tighter leading-tight">
                    Next chapter
                  </h3>
                  <BookExtractPreview
                    title={nextPost.title}
                    slug={nextPost.slug}
                  />
                </div>
              )}
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
    "excerpt",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");
  const nextPost = getNextBookExtractBySlug(params.slug, ["title", "slug"]);

  return {
    props: {
      post: {
        ...post,
        content,
      },
      nextPost,
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
