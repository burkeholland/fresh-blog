import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Editor from "../components/Editor";

const Edit = () => {
  const [editorBody, setEditorBody] = useState("");
  const [title, setTitle] = useState("");
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getPost(id);
    }
  }, [id]);

  async function getPost(id) {
    const response = await fetch(`/api/post/${id}`);
    const post = await response.json();
    setEditorBody(post.body);
    setTitle(post.title);
  }

  async function handleSubmit() {
    // save state to database and redirect
    await fetch("/api/post", {
      method: "post",
      body: JSON.stringify({ id, title, body: editorBody })
    });

    history.push("/");
  }

  return (
    <div className="section">
      <div className="field">
        <label className="label">Title</label>
        <div className="control">
          <input
            className="input"
            name="title"
            type="text"
            placeholder="Post Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Post</label>
        <Editor editorBody={editorBody} onEditorChange={setEditorBody}></Editor>
      </div>
      <button
        className="button is-primary is-pulled-right"
        onClick={handleSubmit}
      >
        Publish
      </button>
    </div>
  );
};

export default Edit;
