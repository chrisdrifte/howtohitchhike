import Image from 'next/image';

import LinkInstagram from './LinkInstagram';
import LinkWebsite from './LinkWebsite';

type Props = {
  title: string;
  picture: string;
  instagram?: string;
  website?: string;
};

const Credit = ({ title, picture, instagram, website }: Props) => {
  const hasSocialMedia = !!(instagram || website);

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
      <div className="text-xl font-bold">{title}</div>
      {hasSocialMedia && (
        <ul className="flex m-4">
          <li className="m-1">
            {instagram && <LinkInstagram username={instagram} />}
          </li>
          <li className="m-1">{website && <LinkWebsite url={website} />}</li>
        </ul>
      )}
    </div>
  );
};

export default Credit;
