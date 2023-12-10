// Sort posts by chronological order, recent to oldest.

import getPosts from "./getPosts";

function sortPosts(posts: Post[]) {
  return posts.sort((a, b) => {
    return new Date(b.published).getTime() - new Date(a.published).getTime();
  });
}

export default sortPosts;
