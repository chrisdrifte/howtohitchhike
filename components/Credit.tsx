import Image from 'next/image';

import LinkInstagram from './LinkInstagram';
import LinkWebsite from './LinkWebsite';

type Props = {
  name: string;
  picture: string;
  instagram?: string;
  website?: string;
};

const Credit = ({ name, picture, instagram, website }: Props) => {
  const hasSocialMedia = !!(instagram || website);

  return (
    <div className="flex items-center">
      <Image
        src={picture}
        className="w-12 h-12 rounded-full mr-4"
        alt={name}
        width={48}
        height={48}
      />
      <div className="text-xl font-bold">{name}</div>
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
