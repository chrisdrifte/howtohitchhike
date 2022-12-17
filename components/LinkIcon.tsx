import Image from 'next/image';
import Link from 'next/link';

type Props = {
  url: string;
  iconSrc: string;
  nofollow?: boolean;
};

function LinkIcon({ url, iconSrc, nofollow }: Props) {
  const readableText = `Visit ${url}`;

  const rel = ["noopener", "noreferrer"];
  if (nofollow) {
    rel.push("nofollow");
  }

  return (
    <Link href={url} title={readableText} target="_blank" rel={rel.join(" ")}>
      <Image src={iconSrc} width={32} height={32} alt={readableText} />
    </Link>
  );
}

export default LinkIcon;
