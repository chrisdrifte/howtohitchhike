import React from "react";

type Props = {};

export function Statement({ children }: React.PropsWithChildren<Props>) {
  return (
    <h2 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
      {children}
    </h2>
  );
}

export default Statement;
