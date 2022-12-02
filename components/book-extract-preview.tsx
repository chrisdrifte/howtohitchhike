import Link from 'next/link';

import { BOOK_EXTRACTS_DIR } from '../lib/constants';
import Avatar from './avatar';
import CoverImage from './cover-image';
import DateFormatter from './date-formatter';

import type Author from "../interfaces/author";
type Props = {
  title: string;
  coverImage: string;
  excerpt: string;
  slug: string;
};

const BookExtractPreview = ({ title, coverImage, excerpt, slug }: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          dir={BOOK_EXTRACTS_DIR}
          src={coverImage}
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/${BOOK_EXTRACTS_DIR}/${slug}`}
          href={`/${BOOK_EXTRACTS_DIR}/[slug]`}
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
};

export default BookExtractPreview;
