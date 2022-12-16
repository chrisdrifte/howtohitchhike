import Image from 'next/image';

import LinkInstagram from './LinkInstagram';
import LinkLinkedIn from './LinkLinkedIn';
import LinkWebsite from './LinkWebsite';

type Props = {
  title: string;
  picture: string;
  instagram?: string;
  linkedIn?: string;
  website?: string;
};

const Credit = ({ title, picture, instagram, linkedIn, website }: Props) => {
  const hasSocialMedia = !!(instagram || linkedIn || website);

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
          {instagram && (
            <li className="m-1">
              <LinkInstagram username={instagram} />
            </li>
          )}
          {linkedIn && (
            <li className="m-1">
              <LinkLinkedIn url={linkedIn} />
            </li>
          )}
          {website && (
            <li className="m-1">
              <LinkWebsite url={website} />
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Credit;
