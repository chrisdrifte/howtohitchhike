import { ContentType } from '../models/Content';
import LinkContent from './LinkContent';

type Props = {
  slug: string;
  title: string;
};

const BookExtractPreview = ({ title, slug }: Props) => {
  return (
    <div className="border-b border-b-black last:border-b-0 py-8">
      <h2 className="text-2xl md:text-4xl leading-snug">
        <LinkContent type={ContentType.BookExtract} slug={slug}>
          {title}
        </LinkContent>
      </h2>
    </div>
  );
};

export default BookExtractPreview;
