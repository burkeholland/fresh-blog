import React from "react";
import { Link } from "react-router-dom";
import Role from "./Role";

const Nav = ({ user }) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Role user={user} role="author">
                <Link to="/new" className="button is-primary">
                  New Post
                </Link>
              </Role>
              {user ? (
                <a href="/.auth/logout" className="button is-light">
                  Logout
                </a>
              ) : (
                <a href="/.auth/login/github" className="button is-light">
                  Login
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
