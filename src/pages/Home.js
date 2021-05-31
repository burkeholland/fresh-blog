import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const response = await fetch("/api/posts");
    const posts = await response.json();
    setPosts(posts);
  }

  async function handlePostClick(id) {
    history.push(`/post/${id}`);
  }

  return posts.map(({ title, body, id }, index) => (
    <div className="section">
      <div className="is-clickable" onClick={() => handlePostClick(id)}>
        <h1 className="title is-size-1">{title}</h1>
        <p>{`${body.substring(0, 400).replaceAll(/[^>]*>/g, "")}...`}</p>
      </div>
    </div>
  ));
};

export default Home;
