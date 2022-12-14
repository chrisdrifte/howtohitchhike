import ErrorPage from 'next/error';
import { useRouter } from 'next/router';

import {
    enhanceBookExtract, getAllBookExtracts, getBookExtractBySlug, getBookExtractPaths
} from '../../api-ssr/bookExtracts';
import { getNextSlug } from '../../api-ssr/slugs';
import Layout from '../../components/Layout';
import Meta from '../../components/Meta';
import NoticeSuggestedPost from '../../components/NoticeSuggestedPost';
import PageBook from '../../components/PageBook';
import StructuredData from '../../components/StructuredData';
import useReadHistory from '../../hooks/useReadHistory';
import BookExtract from '../../models/BookExtract';
import { ContentType } from '../../models/Content';

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

  const readHistory = useReadHistory();
  readHistory.addEntry(bookExtract);

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
      {nextBookExtract && (
        <NoticeSuggestedPost
          isFirstSuggestion={false}
          type={ContentType.BookExtract}
          slug={nextBookExtract.slug}
          title={nextBookExtract.title}
        />
      )}
      <PageBook bookExtract={bookExtract} nextBookExtract={nextBookExtract} />
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
  locale: string;
};

export async function getStaticProps({ params, locale }: Params) {
  const bookExtract = getBookExtractBySlug(params.slug, locale);

  const nextSlug = getNextSlug(ContentType.BookExtract, params.slug, locale);
  const nextBookExtract = getBookExtractBySlug(nextSlug, locale);

  return {
    props: {
      bookExtract: await enhanceBookExtract(bookExtract),
      nextBookExtract: await enhanceBookExtract(nextBookExtract),
    },
  };
}

export async function getStaticPaths({ locales }) {
  const bookExtracts = getBookExtractPaths(locales);

  return {
    paths: bookExtracts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
        locale: post.locale,
      };
    }),
    fallback: false,
  };
}
