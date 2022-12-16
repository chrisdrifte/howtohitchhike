import { GetStaticProps } from 'next';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import { ComponentProps } from 'react';

import getBookExtract from '../../cms/getBookExtract';
import getNextSlug from '../../cms/getNextSlug';
import getPaths from '../../cms/getPaths';
import getTranslations from '../../cms/getTranslations';
import getTranslationMap from '../../cms/getTranslationsMap';
import Layout from '../../components/Layout';
import Meta from '../../components/Meta';
import NoticeSuggestedPost from '../../components/NoticeSuggestedPost';
import PageBook from '../../components/PageBook';
import StructuredData from '../../components/StructuredData';
import useReadHistory from '../../hooks/useReadHistory';
import BookExtract from '../../models/BookExtract';
import ContentType from '../../models/ContentType';
import Translation from '../../models/Translation';
import { i18n } from '../../next.config';

type Props = {
  bookExtract: BookExtract;
  nextBookExtract?: Pick<BookExtract, "title" | "slug">;
  translations: ComponentProps<typeof Meta>["translations"];
  preview?: boolean;
};

export default function BookExtractPage({
  bookExtract,
  nextBookExtract,
  translations,
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
        translations={translations}
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
      <PageBook
        bookExtract={bookExtract}
        nextBookExtract={nextBookExtract}
        translations={translations}
        locale={router.locale}
      />
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
  locale: string;
  locales: string[];
};

export const getStaticProps: GetStaticProps = async ({
  params,
  locale,
}: Params) => {
  const type = ContentType.BookExtract;
  const slug = params.slug;

  const bookExtract = await getBookExtract({ locale, slug });

  const nextSlug = await getNextSlug(bookExtract);
  const nextBookExtract = await getBookExtract({ locale, slug: nextSlug });

  const translations = await getTranslations({ type, slug });

  return {
    props: {
      bookExtract,
      nextBookExtract,
      translations,
    },
  };
};

export async function getStaticPaths() {
  const paths = await getPaths(ContentType.BookExtract);

  return {
    paths: paths.map((post) => {
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
