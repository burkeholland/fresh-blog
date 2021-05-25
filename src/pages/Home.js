import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const response = await fetch("/api/posts");
    const posts = await response.json();
    setPosts(posts);
  }

  return posts.map(({ title, description, id }, index) => (
    <div className="section">
      <Link to={`/post/${id}`}>
        <h1 className="title is-size-1">{title}</h1>
        <p>{description}</p>
      </Link>
    </div>
  ));
};

export default Home;
