import dynamic from 'next/dynamic';

import { BLOG_POSTS_DIR } from '../config';
import useReadHistory from '../hooks/useReadHistory';
import BlogPost from '../models/BlogPost';
import BookExtract from '../models/BookExtract';
import Post from '../models/Post';
import AsideContribute from './AsideContribute';
import AsideKeepReading from './AsideKeepReading';
import BlogPostList from './BlogPostList';
import BookExtractList from './BookExtractList';
import Container from './Container';
import Intro from './Intro';
import PostHero from './PostHero';

type Props = {
  featuredPost?: Post;
  blogPosts: BlogPost[];
  bookExtracts: BookExtract[];
};

export default function PageHome({
  featuredPost,
  blogPosts,
  bookExtracts,
}: Props) {
  return (
    <>
      <Container>
        <Intro />
        {featuredPost && (
          <PostHero
            type={featuredPost.type}
            slug={featuredPost.slug}
            title={featuredPost.title}
            coverImage={featuredPost.coverImage}
            excerpt={featuredPost.excerpt}
          />
        )}
      </Container>
      <AsideContribute />
      <Container>
        <BlogPostList blogPosts={blogPosts} />
        <BookExtractList bookExtracts={bookExtracts} />
      </Container>
      <AsideKeepReading />
    </>
  );
}
