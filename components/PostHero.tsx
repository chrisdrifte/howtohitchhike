import Link from "next/link";

import Post from "../interfaces/Post";
import CoverImage from "./CoverImage";

type Props = Pick<Post, "title" | "coverImage" | "excerpt" | "slug"> & {
  dir: string;
};

const PostHero = ({ title, coverImage, excerpt, dir, slug }: Props) => {
  return (
    <section>
      <div className="relative mb-8 md:mb-16 h-64 md:h-96 overflow-hidden">
        <CoverImage
          title={title}
          src={coverImage}
          dir={dir}
          slug={slug}
          loading="eager"
          fill
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h1 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link
              as={`/${dir}/${slug}`}
              href={`/${dir}/[slug]`}
              className="hover:underline"
            >
              {title}
            </Link>
          </h1>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </section>
  );
};

export default PostHero;
