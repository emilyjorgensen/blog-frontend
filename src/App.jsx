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
function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h2>All My Posts!</h2>
      {/* loop of defined post data props from the parent component */}
      {props.posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <img src={post.image} alt="blog post image" />
          <p>{post.body}</p>
          <button>Read more!</button>
        </div>
      ))}
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
      <PostsIndex posts={posts} />
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
