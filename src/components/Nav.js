import React from "react";

const Nav = ({ user }) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {user.isAuthor && (
                <a href="/new" className="button is-primary">
                  New Post
                </a>
              )}
              {user.isLoggedIn ? (
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
