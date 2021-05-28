import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Role from "../components/Role";

const Post = ({ user }) => {
  const [post, setPost] = useState([]);
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

  async function handleDeletePost() {
    await fetch(`/api/post/${id}`, {
      method: "delete",
    });

    history.push("/");
  }

  return (
    <div className="section">
      <h1 class="title is-size-1">{post.title}</h1>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: post.body }}
      ></div>
      <Role user={user} role="author">
        <button
          className="button is-primary is-pulled-right"
          onClick={handleDeletePost}
        >
          Delete Post
        </button>
      </Role>
      <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-content">
          Are you sure you want to delete this post?
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
      </div>
    </div>
  );
};

export default Post;
