export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
    event.target.reset();
  };

  return (
    <div id="posts-show">
      <h2>{props.post.title}</h2>
      <img src={props.post.image} className="card-img-top" alt="blog post image" />
      <p>{props.post.body}</p>

      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={props.post.title} name="title" type="text" />
        </div>
        <div>
          Image URL: <input defaultValue={props.post.image} name="image" type="text" />
        </div>
        <div>
          Title: <input defaultValue={props.post.body} name="body" type="text" />
        </div>
        <button type="submit">Update post</button>
      </form>
    </div>
  );
}
