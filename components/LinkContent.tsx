import Link from 'next/link';
import { PropsWithChildren } from 'react';

import { getContentPath } from '../api-client/getContentPath';
import { ContentType } from '../models/Content';

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
      as={getContentPath(type, slug)}
      href={getContentPath(type, "[slug]")}
      aria-label={title}
      className="hover:underline"
    >
      {children}
    </Link>
  );
}

export default LinkContent;
