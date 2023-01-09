import Link from "next/link";

import BlogPost from "../models/BlogPost";
import BookExtract from "../models/BookExtract";
import Contributor from "../models/Contributor";
import Post from "../models/Post";
import { i18n } from "../next.config";
import AsideContribute from "./AsideContribute";
import AsideKeepReading from "./AsideKeepReading";
import BlogPostList from "./BlogPostList";
import BookExtractList from "./BookExtractList";
import Container from "./Container";
import Credit from "./Credit";
import CreditTranslation from "./CreditTranslation";
import Intro from "./Intro";
import PostHero from "./PostHero";

type Props = {
  featuredPost?: Post;
  blogPosts: BlogPost[];
  bookExtracts: BookExtract[];
  locale: string;
};

export default function PageHome({
  featuredPost,
  blogPosts,
  bookExtracts,
  locale,
}: Props) {
  const isDefaultLocale = i18n.defaultLocale === locale;

  let translator: Contributor;
  if (!isDefaultLocale) {
    const translators = bookExtracts
      .map(({ translator }) => translator)
      .filter(Boolean);

    const uniqueTranslatorSlugs = Array.from(
      new Set(translators.map(({ slug }) => slug))
    );

    if (uniqueTranslatorSlugs.length === 1) {
      const translatorSlug = uniqueTranslatorSlugs[0];
      translator = translators.find(({ slug }) => slug === translatorSlug);
    }
  }

  return (
    <>
      <Container>
        <Intro
          translations={i18n.locales.map((locale) => ({
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

      <CreditTranslation translator={translator} showContent />

      {isDefaultLocale && <AsideKeepReading />}
    </>
  );
}
