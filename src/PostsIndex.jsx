// index moved into its own file
export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h2>All My Posts!</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {props.posts.map((post) => (
          <div key={post.id} className="col">
            <div className="card mb-3">
              <img src={post.image} className="card-img-top" alt="blog post image" />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <button type="button" className="btn btn-secondary" onClick={() => props.onShowPost(post)}>
                  Read more!
                </button>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* OLD loop of defined post data props from the parent component */}
      {/* <div className="posts">
        {props.posts.map((post) => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <img src={post.image} alt="blog post image" />
            <button onClick={() => props.onShowPost(post)}>Read more!</button>
          </div>
        ))}
      </div> */}
    </div>
  );
}
