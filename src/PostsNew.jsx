// new form moved into a file of its own function
export function PostsNew() {
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
