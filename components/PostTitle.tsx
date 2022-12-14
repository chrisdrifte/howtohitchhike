import { PropsWithChildren, ReactNode } from 'react';

type Props = {};

const PostTitle = ({ children }: PropsWithChildren<Props>) => {
  return (
    <h1 className="inline text-5xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none text-center md:text-left">
      {children}
    </h1>
  );
};

export default PostTitle;
