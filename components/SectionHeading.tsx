import React from "react";

type Props = {};

export function SectionHeading({ children }: React.PropsWithChildren<Props>) {
  return (
    <h2 className="mt-16 mb-8 text-5xl md:text-7xl font-serif font-bold tracking-tighter leading-tight">
      {children}
    </h2>
  );
}

export default SectionHeading;
