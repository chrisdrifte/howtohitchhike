import Link from 'next/link';

import { BLOG_POSTS_DIR } from '../config';
import Author from '../interfaces/Author';
import Avatar from './Avatar';
import CoverImage from './CoverImage';
import DateFormatter from './DateFormatter';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const BlogPostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          dir={BLOG_POSTS_DIR}
          src={coverImage}
          sizes="(max-width: 768px) 100vw, 684px"
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/${BLOG_POSTS_DIR}/${slug}`}
          href={`/${BLOG_POSTS_DIR}/[slug]`}
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
};

export default BlogPostPreview;
