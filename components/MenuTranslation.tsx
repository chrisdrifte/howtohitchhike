import Image from 'next/image';
import Link from 'next/link';

import { getPostKey } from '../api-client/getPostKey';
import { ContentType } from '../models/Content';

type Props = {
  translations: { locale: string; slug: string }[];
};

export function MenuTranslations({ translations }: Props) {
  if (translations.length < 2) {
    return null;
  }

  return (
    <div className="py-4 md:py-0 inline-flex flex-row justify-center">
      <div className="px-2">
        <Image
          src="/assets/icons/locale.svg"
          width={76 / 4}
          height={76 / 4}
          alt="Select language"
        />
      </div>
      {translations.map((translation) => (
        <div key={`${translation.locale}:${translation.slug}`} className="px-2">
          <Link href={translation.slug} locale={translation.locale}>
            <Image
              src={`/assets/icons/flag.${translation.locale}.png`}
              alt={translation.locale}
              width={128 / 4}
              height={76 / 4}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
