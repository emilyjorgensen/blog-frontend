// create a component to hold post show functionality

export function PostsShow(props) {
  return (
    <div id="posts-show">
      <h2>Title: {props.post.title}</h2>
      <img src={props.post.image} className="card-img-top" alt="blog post image" />
      <p>{props.post.body}</p>
    </div>
  );
}
