import Link from 'next/link';
import { PropsWithChildren } from 'react';

import getContentURI from '../cms/getContentURI';
import ContentType from '../models/ContentType';

type Props = {
  type: ContentType;
  slug: string;
  title?: string;
};

function LinkContent({
  type,
  slug,
  title,
  children,
}: PropsWithChildren<Props>) {
  return (
    <Link
      as={getContentURI({ type, slug })}
      href={getContentURI({ type, slug: "[slug]" })}
      aria-label={title}
      className="hover:underline"
    >
      {children}
    </Link>
  );
}

export default LinkContent;
