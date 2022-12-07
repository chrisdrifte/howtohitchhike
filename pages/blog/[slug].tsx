import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';

import BlogPostHeader from '../../components/BlogPostHeader';
import BookExtractPreview from '../../components/BookExtractPreview';
import Container from '../../components/Container';
import Contribute from '../../components/Contribute';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import PostBody from '../../components/PostBody';
import PostTitle from '../../components/PostTitle';
import SectionSeparator from '../../components/SectionSeparator';
import StructuredData from '../../components/StructuredData';
import { getAllBlogPosts, getBlogPostBySlug } from '../../lib/api';
import { BLOG_DESCRIPTION, BLOG_TITLE, BLOG_URL, DEFAULT_OG_IMAGE_URL } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';

import type BlogPost from "../../interfaces/BlogPost";
type Props = {
  post: BlogPost;
  preview?: boolean;
};

export default function BlogPostPage({ post, preview }: Props) {
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
              name: post.author.name,
              image: post.author.picture,
            },
          ],
          image: post.coverImage,
          datePublished: post.date,
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
              <BlogPostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
              <div className="max-w-2xl mx-auto">
                <SectionSeparator />
                <h3 className="text-3xl font-serif font-bold tracking-tighter leading-tight">
                  Read the book for free
                </h3>
                <BookExtractPreview
                  title="Rules of Thumb: How to Hitchhike and Live on the Road"
                  slug="011-tales-from-the-road-usa"
                />
              </div>
            </article>
          </>
        )}
      </Container>
      <Contribute />
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
