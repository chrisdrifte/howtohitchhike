import Link from 'next/link';

import { BLOG_LOGO, BLOG_TITLE } from '../config';

const Header = () => {
  return (
    <div className="text-4xl font-serif font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        <img
          src={BLOG_LOGO}
          alt={BLOG_TITLE}
          style={{ width: 250 }}
          width={250}
          height={35}
        />
      </Link>
    </div>
  );
};

export default Header;
