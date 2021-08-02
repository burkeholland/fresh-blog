import React from "react";
import { Link } from "react-router-dom";
import Role from "./Role";

const Nav = ({ user }) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img alt="logo" src="/logo.png" width="112" height="28"></img>
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
          <Role user={user} role="author">
            <Link to="/admin" className="navbar-item is-tab is-active">
              Admin
            </Link>
          </Role>
          <div className="navbar-end">
            <div className="navbar-item">
              {user ? (
                <a href="/.auth/logout" className="navbar-item is-tab">
                  <span class="icon">
                    <i class="fas fa-sign-out-alt"></i>
                  </span>
                  <span>Logout</span>
                </a>
              ) : (
                <a href="/.auth/login/github" className="navbar-item is-tab">
                  <span class="icon">
                    <i class="fas fa-sign-in-alt"></i>
                  </span>
                  <span>Log In</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
