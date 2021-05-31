import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Role from "../components/Role";

const Post = ({ user }) => {
  const [post, setPost] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getPost(id);
  }, [id]);

  async function getPost(id) {
    const response = await fetch(`/api/post/${id}`);
    const post = await response.json();
    setPost(post);
  }

  async function handleConfirmDelete() {
    await fetch(`/api/post/${id}`, {
      method: "delete",
    });

    history.push("/");
  }

  return (
    <div className="section">
      <h1 className="title is-size-1">{post.title}</h1>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: post.body }}
      ></div>
      <Role user={user} role="author">
        <button
          className="button is-primary is-pulled-right"
          onClick={() => setShowConfirm(true)}
        >
          Delete Post
        </button>
      </Role>
      <div className={`modal ${showConfirm ? "is-active" : ""}`}>
        <div
          className="modal-background"
          onClick={() => setShowConfirm(false)}
        ></div>
        <div className="modal-content">
          <div className="box p-3">
            <p className="block is-size-5">
              Are you sure you want to delete this post?
            </p>
            <div>
              <div className="buttons is-right">
                <button className="button" onClick={handleConfirmDelete}>
                  Yes
                </button>
                <button
                  className="button is-danger"
                  onClick={() => setShowConfirm(false)}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => setShowConfirm(false)}
          className="modal-close is-large"
          aria-label="close"
        ></button>
      </div>
    </div>
  );
};

export default Post;
