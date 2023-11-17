import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function PostsShowPage() {
  const [post, setPost] = useState({});
  const params = useParams();

  const handleShowPost = () => {
    axios.get(`http://localhost:3000/posts/${params.id}.json`).then((response) => {
      setPost(response.data);
    });
  };
  useEffect(handleShowPost, []);

  return (
    <div id="posts-show">
      <h1>Post Info</h1>
      <h2>{post.title}</h2>
      <img src={post.image} alt="blog post image" />
      <p>{post.body}</p>
    </div>
  );
}
