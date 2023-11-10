export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyPost(props.post);
  };

  return (
    <div id="posts-show">
      <h2>{props.post.title}</h2>
      <img src={props.post.image} className="card-img-top" alt="blog post image" />
      <p>{props.post.body}</p>

      <form onSubmit={handleSubmit}>
        <div>
          Title: <input required defaultValue={props.post.title} name="title" type="text" />
        </div>
        <div>
          Image URL: <input required defaultValue={props.post.image} name="image" type="text" />
        </div>
        <div>
          Title: <input required defaultValue={props.post.body} name="body" type="text" />
        </div>
        <button type="submit" data-bs-dismiss="modal">
          Update post
        </button>
      </form>
      <button onClick={handleClick} data-bs-dismiss="modal">
        Delete post
      </button>
    </div>
  );
}
