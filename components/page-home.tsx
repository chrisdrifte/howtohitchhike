import Head from 'next/head';

import Post from '../interfaces/post';
import { CMS_NAME } from '../lib/constants';
import Container from './container';
import HeroPost from './hero-post';
import Intro from './intro';
import Layout from './layout';
import MoreStories from './more-stories';

type Props = {
  allPosts: Post[];
};

export default function PageHome({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}
