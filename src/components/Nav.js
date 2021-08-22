import React from "react";
import { Link } from "react-router-dom";
import Role from "./Role";

const Nav = ({ user }) => {
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <h1 className="has-text-weight-bold">Fresh Blog</h1>
          </a>
          <button
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Role user={user} role="author">
              <Link to="/admin" className="navbar-item">
                Admin
              </Link>
            </Role>
          </div>
          <div className="navbar-end">
            {user ? (
              <a href="/.auth/logout" className="navbar-item">
                <span className="icon">
                  <i className="fas fa-sign-out-alt"></i>
                </span>
                <span>Logout</span>
              </a>
            ) : (
              <a href="/.auth/login/github" className="navbar-item">
                <span className="icon">
                  <i className="fas fa-sign-in-alt"></i>
                </span>
                <span>Log In</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
