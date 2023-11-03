import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  );
}

// new form moved into a function of its own function
function PostsNew() {
  return (
    /* new blog post form */
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Body: <input type="text" />
        </div>
        <div>
          Image: <input type="text" />
        </div>
        <button type="submit">Create the post!</button>
      </form>
    </div>
  );
}

// index moved into its own function
function PostsIndex() {
  return (
    /* index of blog posts */
    <div id="posts-index">
      <h1>All posts</h1>
      {/* first post */}
      <div className="posts">
        <h2>I Quit My Job</h2>
        <img
          src="https://plus.unsplash.com/premium_photo-1668007659236-30c7362ee7bd?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2Fsa2luZyUyMHRyYWlsfGVufDB8fDB8fHww"
          alt="image of walking path"
        />
        <p>The decision didn't feel like a choice between...</p>
        <button>read more</button>
      </div>
      <div className="posts">
        <h2>So What Is Next?</h2>
        <img
          src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZHMlMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D"
          alt="hands at a laptop keyboard"
        />
        <p>My journey has taken an unexpected turn...</p>
        <button>read more</button>
      </div>
    </div>
  );
}

// footer moved to its own function
function Footer() {
  return (
    <div>
      <footer>
        <p>Copyright 20XX</p>
      </footer>
    </div>
  );
}

// creates a content function to import recipe components
function Content() {
  return (
    <div>
      <PostsNew />
      <PostsIndex />
    </div>
  );
}

// imports components into the app to be loaded in the browser
function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
