import { useState } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";

// creates a content function to import recipe components
export function Content() {
  // giving react the variable and the ability to set that variable
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  // a function to toggle modal show ON
  const handleShowPost = () => {
    setIsPostsShowVisible(true);
  };

  // a function to toggle modal show OFF, closes modal
  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  let posts = [
    {
      id: 1,
      title: "I Quit My Job",
      body: "The decision didn't feel like a choice between...",
      image:
        "https://plus.unsplash.com/premium_photo-1668007659236-30c7362ee7bd?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2Fsa2luZyUyMHRyYWlsfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      title: "So What Is Next?",
      body: "My journey has taken an unexpected turn...",
      image:
        "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZHMlMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      title: "What I'm Most Excited About",
      body: "Most people look a bit shocked...",
      image:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <p>TEST</p>
      </Modal>
    </div>
  );
}
