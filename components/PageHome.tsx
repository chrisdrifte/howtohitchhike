import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { BLOG_POSTS_DIR } from '../config';
import useReadHistory from '../hooks/useReadHistory';
import BlogPost from '../models/BlogPost';
import BookExtract from '../models/BookExtract';
import { ContentType } from '../models/Content';
import Post from '../models/Post';
import { Translation } from '../models/Translation';
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
  locales: string[];
  isDefaultLocale: boolean;
};

export default function PageHome({
  featuredPost,
  blogPosts,
  bookExtracts,
  locales,
  isDefaultLocale,
}: Props) {
  return (
    <>
      <Container>
        <Intro
          translations={locales.map((locale) => ({
            locale,
            slug: "/",
          }))}
        />
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
      {isDefaultLocale && <AsideContribute />}
      <Container>
        <BlogPostList blogPosts={blogPosts} />
        <BookExtractList bookExtracts={bookExtracts} />
      </Container>
      {isDefaultLocale && <AsideKeepReading />}
    </>
  );
}
