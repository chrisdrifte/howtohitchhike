import { ComponentProps } from 'react';

import ContentType from '../models/ContentType';
import CoverImage from './CoverImage';
import { MenuTranslations } from './MenuTranslation';
import PostTitle from './PostTitle';

type Props = {
  title: string;
  coverImage: string;
  translations: ComponentProps<typeof MenuTranslations>["translations"];
};

const BookExtractHeader = ({ title, coverImage, translations }: Props) => {
  return (
    <>
      <div className="inline-block mb-6">
        <PostTitle>{title} </PostTitle>
        <MenuTranslations translations={translations} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage
          type={ContentType.BookExtract}
          title={title}
          src={coverImage}
          loading="eager"
        />
      </div>
    </>
  );
};

export default BookExtractHeader;
