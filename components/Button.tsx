import cn from "classnames";
import React from "react";

type Props = {
  variant?: string;
  url: string;
};

export function Button({
  variant,
  url,
  children,
}: React.PropsWithChildren<Props>) {
  const primary =
    "bg-black hover:bg-white hover:text-black border border-black text-white py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0";
  const secondary = "hover:underline";

  return (
    <a
      href={url}
      rel="button"
      className={cn("mx-3 font-bold text-center", {
        [primary]: variant === "primary" || !variant,
        [secondary]: variant === "secondary",
      })}
    >
      {children}
    </a>
  );
}

export default Button;
