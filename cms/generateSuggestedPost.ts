import { HistoryEntry } from '../hooks/useReadHistory';
import BlogPost from '../models/BlogPost';
import BookExtract from '../models/BookExtract';
import getKey from './getKey';

/**
 * Predict the next post a user will be interested in reading.
 */
function generateSuggestedPost(
  posts: (BlogPost | BookExtract)[],
  history: HistoryEntry[]
) {
  // get the last read post
  const lastEntry = history.pop();

  // start at beginning if nothing read yet
  if (!lastEntry) {
    return posts[0];
  }

  // create an search index for history entries
  const historyKeys = history.map(getKey);

  // remove all posts that exist in entries
  // (last read post is not removed because we popped it earlier)
  const unreadPosts = posts.filter(
    (post) => !historyKeys.includes(getKey(post))
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
