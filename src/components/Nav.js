import React from "react";

const Nav = ({ user }) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            {user ? (
              <div className="buttons">
                <a href="/new" className="button is-primary">
                  New Post
                </a>
                <a href="/.auth/logout" className="button is-light">
                  Logout
                </a>
              </div>
            ) : (
              <div className="buttons">
                <a href="/.auth/login/github" className="button is-light">
                  Login
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
