import Head from "next/head";

import BlogPost from "../interfaces/BlogPost";
import BookExtract from "../interfaces/BookExtract";
import Post from "../interfaces/Post";
import {
  BLOG_POSTS_DIR,
  BLOG_TITLE,
  BOOK_EXTRACTS_DIR,
} from "../lib/constants";
import BlogPostList from "./BlogPostList";
import BookExtractList from "./BookExtractList";
import Container from "./Container";
import Contribute from "./Contribute";
import Intro from "./Intro";
import KeepReading from "./KeepReading";
import Layout from "./Layout";
import PostHero from "./PostHero";

type Props = {
  allBlogPosts: BlogPost[];
  allBookExtracts: BookExtract[];
};

export default function PageHome({ allBlogPosts, allBookExtracts }: Props) {
  let heroPost: Post;
  let heroPostDir: string;

  if (!heroPost && typeof allBlogPosts[0] !== "undefined") {
    let heroPostIndex = allBlogPosts.findIndex(
      ({ slug }) => slug === "eight-years-of-how-to-hitchhike"
    );
    if (heroPostIndex === -1) {
      heroPostIndex = 0;
    }

    heroPost = allBlogPosts[heroPostIndex];
    heroPostDir = BLOG_POSTS_DIR;
    allBlogPosts = allBlogPosts.filter((_blogPost, i) => i !== heroPostIndex);
  }

  if (!heroPost && typeof allBookExtracts[0] !== "undefined") {
    let heroPostIndex = 0;

    heroPost = allBookExtracts[0];
    heroPostDir = BOOK_EXTRACTS_DIR;
    allBookExtracts = allBookExtracts.filter(
      (_bookExtract, i) => i !== heroPostIndex
    );
  }

  return (
    <>
      <Layout>
        <Head>
          <title>{BLOG_TITLE}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <PostHero
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              dir={heroPostDir}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
        </Container>
        <Contribute />
        <Container>
          {allBlogPosts.length > 0 && <BlogPostList blogPosts={allBlogPosts} />}
          {allBookExtracts.length > 0 && (
            <BookExtractList bookExtracts={allBookExtracts} />
          )}
        </Container>
        <KeepReading />
      </Layout>
    </>
  );
}
