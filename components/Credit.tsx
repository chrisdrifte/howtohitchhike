import Image from "next/image";
import React from "react";

import { forceArray } from "../utility/forceArray";
import LinkIcon from "./LinkIcon";
import LinkInstagram from "./LinkInstagram";

type Props = {
  title: string;
  picture: string;
  hillfire?: string;
  instagram?: string | string[];
  linkedIn?: string;
  website?: string;
};

const Credit = ({
  title,
  picture,
  hillfire,
  instagram,
  linkedIn,
  website,
}: Props) => {
  const links: { key: string; link: JSX.Element }[] = [
    // list of external links
    ...forceArray(website).map((url) => ({
      key: url,
      link: <LinkIcon iconSrc="/assets/icons/external.svg" url={url} />,
    })),
    // list of instagram links
    ...forceArray(instagram).map((username) => ({
      key: username,
      link: <LinkInstagram username={username} />,
    })),
    // list of linked in links
    ...forceArray(linkedIn).map((url) => ({
      key: url,
      link: (
        <LinkIcon iconSrc="/assets/icons/linkedin.svg" url={url} nofollow />
      ),
    })),
    // list of hillfire links
    ...forceArray(hillfire).map((url) => ({
      key: url,
      link: (
        <LinkIcon iconSrc="/assets/icons/hillfire.png" url={url} nofollow />
      ),
    })),
  ];

  return (
    <div className="flex items-center">
      {picture && (
        <Image
          src={picture}
          className="w-12 h-12 rounded-full mr-4"
          alt={title}
          width={48}
          height={48}
        />
      )}
      <div className="text-l md:text-xl font-bold">{title}</div>
      {!!links.length && (
        <ul className="flex m-4">
          {links.map(({ key, link }) => (
            <li key={key} className="m-1">
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Credit;
