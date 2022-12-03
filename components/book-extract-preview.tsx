import Link from 'next/link';

import { BOOK_EXTRACTS_DIR } from '../lib/constants';

type Props = {
  title: string;
  slug: string;
};

const BookExtractPreview = ({ title, slug }: Props) => {
  return (
    <div className="border-b border-b-black last:border-b-0 py-8">
      <h2 className="text-4xl leading-snug">
        <Link
          as={`/${BOOK_EXTRACTS_DIR}/${slug}`}
          href={`/${BOOK_EXTRACTS_DIR}/[slug]`}
          className="hover:underline"
        >
          {title}
        </Link>
      </h2>
    </div>
  );
};

export default BookExtractPreview;
