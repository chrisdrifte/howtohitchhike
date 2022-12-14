import { ComponentProps } from 'react';

import { BLOG_LOGO, BLOG_TAGLINE, BLOG_TITLE } from '../config';
import { MenuTranslations } from './MenuTranslation';

type Props = {
  translations: ComponentProps<typeof MenuTranslations>["translations"];
};

const Intro = ({ translations }: Props) => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="text-5xl md:text-7xl font-serif font-bold tracking-tighter leading-tight md:pr-8">
        <img
          src={BLOG_LOGO}
          alt={BLOG_TITLE}
          style={{ width: 400 }}
          width={400}
          height={55}
        />
      </div>
      <h2 className="text-center md:text-left text-lg mt-5 md:pl-8">
        <MenuTranslations translations={translations} />
      </h2>
    </section>
  );
};

export default Intro;
