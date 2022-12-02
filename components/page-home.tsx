import Head from 'next/head';

import BlogPost from '../interfaces/blog-post';
import BookExtract from '../interfaces/book-extract';
import Post from '../interfaces/post';
import { BLOG_POSTS_DIR, BLOG_TITLE } from '../lib/constants';
import Container from './container';
import HeroPost from './hero-post';
import Intro from './intro';
import Layout from './layout';
import MoreBlogPosts from './more-blog-posts';
import MoreBookExtracts from './more-book-extracts';

type Props = {
  allBlogPosts: BlogPost[];
  allBookExtracts: BookExtract[];
};

export default function PageHome({ allBlogPosts, allBookExtracts }: Props) {
  const heroPost = allBlogPosts[0];
  const morePosts = allBlogPosts.slice(1);
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
              dir={BLOG_POSTS_DIR}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreBlogPosts blogPosts={morePosts} />}
          {allBookExtracts.length > 0 && (
            <MoreBookExtracts bookExtracts={allBookExtracts} />
          )}
        </Container>
      </Layout>
    </>
  );
}
