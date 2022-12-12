import { ContentType } from '../models/Content';
import CoverImage from './CoverImage';
import LinkContent from './LinkContent';

type Props = {
  type: ContentType;
  slug: string;
  title: string;
  coverImage: string;
  excerpt: string;
};

const PostHero = ({ type, slug, title, coverImage, excerpt }: Props) => {
  return (
    <section>
      <div className="relative mb-8 md:mb-16 h-64 md:h-96 overflow-hidden">
        <CoverImage
          type={type}
          slug={slug}
          title={title}
          src={coverImage}
          loading="eager"
          fill
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h1 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <LinkContent type={type} slug={slug}>
              {title}
            </LinkContent>
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
