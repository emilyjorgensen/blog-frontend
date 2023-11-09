import axios from "axios";

export function PostsNew() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handle submit");
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/posts.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };

  return (
    <div id="posts-new">
      <h2>New post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input name="title" type="string" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input name="image" type="string" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label className="form-label">Body</label>
          <textarea
            name="body"
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Write your post here!"
            rows="3"
          ></textarea>
          {/* FIRST LABEL for="exampleFormControlInput1" */}
          {/* SECOND LABEL for="exampleFormControlTextarea1" */}
        </div>
        <div>
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </div>
      </form>

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
