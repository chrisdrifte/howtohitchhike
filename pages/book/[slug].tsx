import ErrorPage from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";

import {
  getAllBookExtracts,
  getBookExtractBySlug,
  getNextBookExtractBySlug,
} from "../../api/bookExtracts";
import BookExtractHeader from "../../components/BookExtractHeader";
import BookExtractPreview from "../../components/BookExtractPreview";
import Container from "../../components/Container";
import Header from "../../components/Header";
import KeepReading from "../../components/KeepReading";
import Layout from "../../components/Layout";
import PostBody from "../../components/PostBody";
import PostTitle from "../../components/PostTitle";
import SectionSeparator from "../../components/SectionSeparator";
import StructuredData from "../../components/StructuredData";
import {
  BLOG_DESCRIPTION,
  BLOG_TITLE,
  BLOG_URL,
  DEFAULT_OG_IMAGE_URL,
} from "../../config";
import markdownToHtml from "../../utility/markdownToHtml";

import type BookExtract from "../../interfaces/BookExtract";
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
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          author: [
            {
              "@type": "Person",
              name: "Chris Drifte",
            },
          ],
          image: post.coverImage,
          datePublished: "2022-12-05T07:38:21.124Z",
        }}
      />
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
                    BLOG_URL +
                    (post.ogImage?.url ||
                      post.coverImage ||
                      DEFAULT_OG_IMAGE_URL)
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
      <KeepReading />
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getBookExtractBySlug(params.slug);
  const content = await markdownToHtml(post.content || "");
  const nextPost = getNextBookExtractBySlug(params.slug);

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
  const bookExtracts = getAllBookExtracts();

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
