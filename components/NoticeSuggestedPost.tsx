import ContentType from '../models/ContentType';
import LinkContent from './LinkContent';
import Notice from './Notice';

type Props = {
  isFirstSuggestion: boolean;
  type: ContentType;
  slug: string;
  title: string;
};

function NoticeSuggestedPost({ isFirstSuggestion, type, slug, title }: Props) {
  return (
    <Notice>
      {isFirstSuggestion ? "Start reading" : "Read next"}:{" "}
      <span className="text-link">
        <LinkContent type={type} slug={slug}>
          {title}
        </LinkContent>
      </span>
    </Notice>
  );
}

export default NoticeSuggestedPost;
