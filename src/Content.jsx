import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { PostsShow } from "./PostsShow";
import { Modal } from "./Modal";

// creates a content function to import recipe components
export function Content() {
  // giving react the variable and the ability to set that variable
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  const [posts, setPosts] = useState([]);

  const [currentPost, setCurrentPost] = useState({});

  // a function to make web request to index blog data
  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  // a function to toggle modal show ON
  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  // a function to toggle modal show OFF, closes modal
  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  // react hook that calls the information to the page one time
  useEffect(handleIndexPosts, []);

  return (
    <div className="container">
      <PostsNew />
      {/* <button onClick={handleIndexPosts}>LOAD POSTS</button> */}
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow post={currentPost} />
      </Modal>
    </div>
  );
}
