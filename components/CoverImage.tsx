import cn from 'classnames';
import Image from 'next/image';
import { ComponentProps } from 'react';

import { ContentType } from '../models/Content';
import LinkContent from './LinkContent';

type InheritedImageProps = Omit<
  ComponentProps<typeof Image>,
  "alt" | "className" | "width" | "height"
>;

interface Props extends InheritedImageProps {
  slug?: string;
  type: ContentType;
  title: string;
  src: string;
  fill?: boolean;
}

const CoverImage = ({
  slug,
  type,
  title,
  src,
  fill,
  sizes,
  loading,
  ...ImageProps
}: Props) => {
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
      sizes={sizes ?? "(max-width: 1300px) 100vw, 1300px"}
      loading={loading ?? "lazy"}
      {...ImageProps}
    />
  );
  return (
    <div className="sm:mx-0">
      {type && slug ? (
        <LinkContent type={type} slug={slug} title={title}>
          {image}
        </LinkContent>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
