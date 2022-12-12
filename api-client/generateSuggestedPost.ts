import { HistoryEntry } from '../hooks/useReadHistory';
import BlogPost from '../models/BlogPost';
import BookExtract from '../models/BookExtract';
import { getPostKey } from './getPostKey';

function generateSuggestedPost(
  posts: (BlogPost | BookExtract)[],
  entries: HistoryEntry[]
) {
  // get the last read post
  const lastEntry = entries.pop();

  // create an index for searching entries
  const entryKeys = entries.map(getPostKey);

  // remove all posts that exist in entries
  const unreadPosts = posts.filter(
    (post) => !entryKeys.includes(getPostKey(post))
  );

  // get the index after the last read post
  const nextIndex = !lastEntry
    ? 0
    : unreadPosts.findIndex((post) => post.slug === lastEntry.slug);

  // suggest the post at that index
  const nextPost = unreadPosts[nextIndex + 1];

  return nextPost;
}

export default generateSuggestedPost;
