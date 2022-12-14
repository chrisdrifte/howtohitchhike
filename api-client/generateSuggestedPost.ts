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

  // start at beginning if nothing read yet
  if (!lastEntry) {
    return posts[0];
  }

  // create an index for searching entries
  const entryKeys = entries.map(getPostKey);

  // remove all posts that exist in entries
  // (last read post is not removed because we popped it earlier)
  const unreadPosts = posts.filter(
    (post) => !entryKeys.includes(getPostKey(post))
  );
  // get the post after the last read post
  const nextIndex = unreadPosts.findIndex(
    (post) => post.slug === lastEntry.slug
  );

  let nextPost = unreadPosts[nextIndex + 1];

  // if no next post, catch up on missed content
  if (!nextPost) {
    nextPost = unreadPosts[0];
  }

  return nextPost;
}

export default generateSuggestedPost;
