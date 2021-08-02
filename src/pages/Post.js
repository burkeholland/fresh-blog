import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const [post, setPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getPost(id);
  }, [id]);

  async function getPost(id) {
    const response = await fetch(`/api/post/${id}`);
    const post = await response.json();
    setPost(post);
  }

  return (
    <div className="section">
      <h1 className="title is-size-1">{post.title}</h1>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: post.bodyHTML }}
      ></div>
    </div>
  );
};

export default Post;
