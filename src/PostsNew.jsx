// new form moved into a file of its own function
export function PostsNew() {
  return (
    /* new blog post form */
    <div id="posts-new">
      <h2>New post</h2>

      <div className="mb-3">
        <label className="form-label">Title</label>
        <input type="string" className="form-control" id="exampleFormControlInput1" />
      </div>
      <div className="mb-3">
        <label className="form-label">Image URL</label>
        <input type="string" className="form-control" id="exampleFormControlInput1" />
      </div>
      <div className="mb-3">
        <label className="form-label">Body</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          placeholder="Write your post here!"
          rows="3"
        ></textarea>
        {/* FIRST LABEL for="exampleFormControlInput1" */}
        {/* SECOND LABEL for="exampleFormControlTextarea1" */}
      </div>
      <div>
        <button type="button" class="btn btn-secondary">
          Submit
        </button>
      </div>

      {/* OLD form */}
      {/* <form>
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
      </form> */}
    </div>
  );
}
