import Link from 'next/link';

import { BLOG_TITLE } from '../lib/constants';

const Header = () => {
  return (
    <div className="text-4xl font-serif font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        <img src="/assets/logo.svg" alt={BLOG_TITLE} style={{ width: 250 }} />
      </Link>
    </div>
  );
};

export default Header;
