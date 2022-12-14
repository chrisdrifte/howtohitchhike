import generateSuggestedPost from '../api-client/generateSuggestedPost';
import NoticeSuggestedPost from '../components/NoticeSuggestedPost';
import useReadHistory from '../hooks/useReadHistory';
import BlogPost from '../models/BlogPost';
import BookExtract from '../models/BookExtract';

type Props = {
  posts: (BlogPost | BookExtract)[];
};

function SuggestedPost({ posts }: Props) {
  const readHistory = useReadHistory();
  const suggestedPost = generateSuggestedPost(posts, readHistory.entries);

  return (
    suggestedPost && (
      <NoticeSuggestedPost
        isFirstSuggestion={readHistory.entries.length === 0}
        type={suggestedPost.type}
        slug={suggestedPost.slug}
        title={suggestedPost.title}
      />
    )
  );
}

export default SuggestedPost;
