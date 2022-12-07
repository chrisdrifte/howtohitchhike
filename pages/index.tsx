import PageHome from '../components/PageHome';
import BlogPost from '../interfaces/BlogPost';
import BookExtract from '../interfaces/BookExtract';
import { getAllBlogPosts, getAllBookExtracts, getSiteMapUrls } from '../lib/api';

type Props = {
  allBlogPosts: BlogPost[];
  allBookExtracts: BookExtract[];
};

export default function Index({ allBlogPosts, allBookExtracts }: Props) {
  return (
    <PageHome allBlogPosts={allBlogPosts} allBookExtracts={allBookExtracts} />
  );
}

export const getStaticProps = async () => {
  const allBlogPosts = getAllBlogPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  const allBookExtracts = getAllBookExtracts([
    "title",
    "pageNumber",
    "slug",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allBlogPosts, allBookExtracts },
  };
};
