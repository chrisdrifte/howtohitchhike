import Image from 'next/image';
import Link from 'next/link';

type Props = {
  url: string;
};

function LinkWebsite({ url }: Props) {
  const readableText = `Visit ${url}`;

  return (
    <Link
      href={url}
      title={readableText}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/assets/icons/external.svg"
        width={32}
        height={32}
        alt={readableText}
      />
    </Link>
  );
}

export default LinkWebsite;
