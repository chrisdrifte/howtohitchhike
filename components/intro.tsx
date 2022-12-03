import { BLOG_TAGLINE, BLOG_TITLE } from '../lib/constants';

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="text-5xl md:text-7xl font-serif font-bold tracking-tighter leading-tight md:pr-8">
        <img src="/assets/logo.svg" alt={BLOG_TITLE} style={{ width: 400 }} />
      </div>
      <h2 className="text-center md:text-left text-lg mt-5 md:pl-8">
        {BLOG_TAGLINE}
      </h2>
    </section>
  );
};

export default Intro;
