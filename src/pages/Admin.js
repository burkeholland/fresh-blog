import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import Modal from "../components/Modal";

const Admin = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPostIndex, setSelectedPostIndex] = useState(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  //   const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const response = await fetch(`/api/posts`);
    const posts = await response.json();
    setPosts(posts);
  }

  async function handleDeleteClick(index) {
    setSelectedPostIndex(index);
    setShowConfirmDelete(true);
  }

  async function handleConfirmDelete() {
    const id = posts[selectedPostIndex].id;
    await fetch(`/api/post/${id}`, {
      method: "delete"
    });

    posts.splice(selectedPostIndex, 1);
    setPosts(posts);

    setShowConfirmDelete(false);
  }

  return (
    <div className="section">
      <div className="columns is-vcentered">
        <div className="column">
          <h2 className="is-size-2">Posts</h2>
        </div>
        <div className="column">
          <Link to="/edit" className="button is-rounded is-pulled-right">
            <span className="icon">
              <i className="fas fa-plus"></i>
            </span>
            <span>New Post</span>
          </Link>
        </div>
      </div>
      <hr />

      {posts.map(({ id, title }, index) => (
        <div className="columns is-vcentered is-mobile">
          <div className="column">
            <span className="is-size-5">{title}</span>
          </div>
          <div className="column is-pulled-right is-narrow">
            <div className="is-pulled-right">
              <div className="buttons">
                <Link to={`/edit/${id}`} className="button is-light">
                  <span class="icon">
                    <i class="fas fa-edit"></i>
                  </span>
                </Link>
                <button
                  className="button is-danger"
                  onClick={() => handleDeleteClick(index)}
                >
                  <span class="icon">
                    <i class="fas fa-trash"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Modal
        message="Are you sure you want to delete this blog post?"
        showModal={showConfirmDelete}
        onDismiss={() => {
          setShowConfirmDelete(false);
        }}
        onYesClick={() => handleConfirmDelete(id)}
      ></Modal>
    </div>
  );
};

export default Admin;
