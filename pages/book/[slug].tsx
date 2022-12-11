import ErrorPage from 'next/error';
import { useRouter } from 'next/router';

import {
    getAllBookExtracts, getBookExtractBySlug, getNextBookExtractBySlug
} from '../../api/bookExtracts';
import Layout from '../../components/Layout';
import Meta from '../../components/Meta';
import PageBook from '../../components/PageBook';
import StructuredData from '../../components/StructuredData';
import BookExtract from '../../interfaces/BookExtract';
import markdownToHtml from '../../utility/markdownToHtml';

type Props = {
  bookExtract: BookExtract;
  nextBookExtract?: Pick<BookExtract, "title" | "slug">;
  preview?: boolean;
};

export default function BookExtractPage({
  bookExtract,
  nextBookExtract,
  preview,
}: Props) {
  const router = useRouter();
  if (!router.isFallback && !bookExtract?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Meta
        title={bookExtract.title}
        description={bookExtract.excerpt}
        ogImage={bookExtract.ogImage?.url || bookExtract.coverImage}
      />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: bookExtract.title,
          description: bookExtract.excerpt,
          author: [
            {
              "@type": "Person",
              name: "Chris Drifte",
            },
          ],
          image: bookExtract.coverImage,
          datePublished: "2022-12-05T07:38:21.124Z",
        }}
      />
      <PageBook bookExtract={bookExtract} nextBookExtract={nextBookExtract} />
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const bookExtract = getBookExtractBySlug(params.slug);
  const content = await markdownToHtml(bookExtract.content || "");
  const nextBookExtract = getNextBookExtractBySlug(params.slug);

  return {
    props: {
      bookExtract: {
        ...bookExtract,
        content,
      },
      nextBookExtract,
    },
  };
}

export async function getStaticPaths() {
  const bookExtracts = getAllBookExtracts();

  return {
    paths: bookExtracts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
