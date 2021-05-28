import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import Post from "./pages/Post";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const response = await fetch("/.auth/me");
    const responseJson = await response.json();
    setUser(responseJson.clientPrincipal);
  }

  return (
    <Router>
      <div className="App">
        <div className="container main">
          <Nav user={user} />
          <div className="has-text-centered">
            <Link to="/">
              <img alt="site logo" src="/logo.png" />
            </Link>
          </div>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/new">
              <NewPost />
            </Route>
            <Route path="/post/:id" children={<Post user={user} />} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
