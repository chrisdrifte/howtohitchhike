import Image from 'next/image';
import Link from 'next/link';

import removePrefix from '../utility/removePrefix';

type Props = {
  username: string;
};

function LinkInstagram({ username }: Props) {
  const usernameNoPrefix = removePrefix("@", username);
  const readableText = `Visit @${usernameNoPrefix} on instagram`;

  return (
    <Link
      href={`https://instagram.com/${usernameNoPrefix}`}
      title={readableText}
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      <Image
        src="/assets/icons/instagram.svg"
        width={32}
        height={32}
        alt={readableText}
      />
    </Link>
  );
}

export default LinkInstagram;
