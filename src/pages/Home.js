import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";

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

  return posts.map(({ title, bodyHTML, id, _ts }, index) => {
    const updated = new Date(_ts * 1000);
    return (
      <article className="section">
        <div className="is-clickable" onClick={() => handlePostClick(id)}>
          <h1 className="title is-size-3">{title}</h1>
          <div className="post">
            <p>{`${bodyHTML.replaceAll(/<[^>]*>/g, "").substring(0, 400)}`}</p>
          </div>
          <p className="is-size-7 mt-2">{updated.toDateString()}</p>
        </div>
      </article>
    );
  });
};

export default Home;
