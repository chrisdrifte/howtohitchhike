import { ContentType } from '../models/Content';
import Contributor from '../models/Contributor';
import CoverImage from './CoverImage';
import Credit from './Credit';
import DateFormatter from './DateFormatter';
import LinkContent from './LinkContent';

type Props = {
  slug: string;
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  contributor: Contributor;
};

const BlogPostPreview = ({
  slug,
  title,
  coverImage,
  date,
  excerpt,
  contributor,
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          type={ContentType.BlogPost}
          slug={slug}
          title={title}
          src={coverImage}
          sizes="(max-width: 768px) 100vw, 684px"
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <LinkContent type={ContentType.BlogPost} slug={slug}>
          {title}
        </LinkContent>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Credit
        title={contributor.title}
        picture={contributor.picture}
        instagram={contributor.instagram}
        website={contributor.website}
      />
    </div>
  );
};

export default BlogPostPreview;
