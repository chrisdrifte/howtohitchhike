import ErrorPage from "next/error";
import { useRouter } from "next/router";

import { getAllBlogPosts, getBlogPostBySlug } from "../../api/blogPosts";
import AsideContribute from "../../components/AsideContribute";
import BlogPostHeader from "../../components/BlogPostHeader";
import BookExtractPreview from "../../components/BookExtractPreview";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Meta from "../../components/Meta";
import PageBlog from "../../components/PageBlog";
import PostBody from "../../components/PostBody";
import PostTitle from "../../components/PostTitle";
import SectionSeparator from "../../components/SectionSeparator";
import StructuredData from "../../components/StructuredData";
import markdownToHtml from "../../utility/markdownToHtml";

import type BlogPost from "../../interfaces/BlogPost";
type Props = {
  blogPost: BlogPost;
  preview?: boolean;
};

export default function BlogPostPage({ blogPost, preview }: Props) {
  const router = useRouter();

  if (!router.isFallback && !blogPost?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  if (router.isFallback) {
    return <PostTitle>Loading...</PostTitle>;
  }

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
              name: blogPost.author.name,
              image: blogPost.author.picture,
            },
          ],
          image: blogPost.coverImage,
          datePublished: blogPost.date,
        }}
      />
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
  const content = await markdownToHtml(blogPost.content.toString() || "");

  return {
    props: {
      blogPost: {
        ...blogPost,
        content,
      },
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
