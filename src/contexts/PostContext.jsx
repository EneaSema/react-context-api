import { createContext, useContext, useState } from "react";

const PostsContext = createContext();

function PostsProvider({ children }) {
  const [posts, setPosts] = useState({});
  const data = { posts, setPosts };
  return <PostContext.Provider value={data}>{children}</PostContext.Provider>;
}

function usePosts() {
  const context = useContext(PostsContext);
  return context;
}

export { PostsProvider, usePosts };
