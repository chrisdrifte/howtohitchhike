import { getAllBlogPosts } from "../api/blogPosts";
import { getAllBookExtracts } from "../api/bookExtracts";
import PageHome from "../components/PageHome";
import BlogPost from "../interfaces/BlogPost";
import BookExtract from "../interfaces/BookExtract";

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
  const allBlogPosts = getAllBlogPosts();
  const allBookExtracts = getAllBookExtracts();

  return {
    props: { allBlogPosts, allBookExtracts },
  };
};
