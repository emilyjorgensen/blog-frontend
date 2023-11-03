// index moved into its own file
export function PostsIndex(props) {
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
