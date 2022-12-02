import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  src: string;
  dir: string;
  slug?: string;
};

const CoverImage = ({ title, src, dir, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm w-full", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      width={1300}
      height={630}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/${dir}/${slug}`} href={`/${dir}/[slug]`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;