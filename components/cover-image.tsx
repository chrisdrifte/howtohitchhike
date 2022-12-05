import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  src: string;
  dir: string;
  slug?: string;
  loading?: HTMLImageElement["loading"];
  fill?: boolean;
};

const CoverImage = ({ title, src, dir, slug, loading, fill }: Props) => {
  const sizeProps = fill ? { fill } : { width: 1300, height: 630 };
  const image = (
    <Image
      src={src}
      title={title}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm w-full", {
        "hover:shadow-lg transition-shadow duration-200 max-h-fill max-": slug,
        "object-cover": fill,
      })}
      {...sizeProps}
      sizes="(max-width: 768px) 100vw,
              1300"
      loading={loading ?? "lazy"}
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
