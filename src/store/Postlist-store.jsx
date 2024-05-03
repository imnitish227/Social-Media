import { useReducer, useState,useEffect } from "react";
import { createContext } from "react";

export const postListContext = createContext({
  postData: [],
  addPost: () => {},
  deletePost: () => {},
  success: "",
  fetching: false,
  setSuccess: () => {},
});
const reducer = (cuurpostData, action) => {
  let newPostData = cuurpostData;
  if (action.type === "NEW_POST") {
    newPostData = [action.payload, ...newPostData];
  } else if (action.type === "API_POSTS") {
    newPostData = action.payload.apiposts;
  } else if (action.type === "DELETE_ITEM") {
    newPostData = cuurpostData.filter(
      (item) => item.id !== action.payload.postId
    );
  }
  return newPostData;
};
const PostListProvider = ({ children }) => {
  const [success, setSuccess] = useState("");

  const [postData, dispatchPostData] = useReducer(reducer, []);
  const addPost = (post) => {
  

    dispatchPostData({
      type: "NEW_POST",
      payload: post,
    });
    setSuccess("success");
  };
  const addPostUsingAPI = (apiposts) => {
    dispatchPostData({
      type: "API_POSTS",
      payload: {
        apiposts,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostData({
      type: "DELETE_ITEM",
      payload: {
        postId,
      },
    });
  };
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setFetching(true);
    fetch("https://dummyjson.com/posts", { signal }).then((res) =>
      res.json().then((obj) => {
        addPostUsingAPI(obj.posts);
        setFetching(false);
      })
    );

    return () => {
      signal.aborted;
    };
  }, []);

  return (
    <postListContext.Provider
      value={{
        postData,
        addPost,
        deletePost,
        success,
        setSuccess,
        fetching,
      }}
    >
      {children}
    </postListContext.Provider>
  );
};

export default PostListProvider;
