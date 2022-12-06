import Head from 'next/head';

import BlogPost from '../interfaces/blog-post';
import BookExtract from '../interfaces/book-extract';
import Post from '../interfaces/post';
import { BLOG_POSTS_DIR, BLOG_TITLE, BOOK_EXTRACTS_DIR } from '../lib/constants';
import Container from './container';
import Contribute from './contribute';
import HeroPost from './hero-post';
import Intro from './intro';
import KeepReading from './keep-reading';
import Layout from './layout';
import MoreBlogPosts from './more-blog-posts';
import MoreBookExtracts from './more-book-extracts';

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
            <HeroPost
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
          {allBlogPosts.length > 0 && (
            <MoreBlogPosts blogPosts={allBlogPosts} />
          )}
          {allBookExtracts.length > 0 && (
            <MoreBookExtracts bookExtracts={allBookExtracts} />
          )}
        </Container>
        <KeepReading />
      </Layout>
    </>
  );
}
