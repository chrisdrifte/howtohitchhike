import PageHome from '../components/page-home';
import Post from '../interfaces/post';
import { getAllPosts } from '../lib/api';

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return <PageHome allPosts={allPosts} />;
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
