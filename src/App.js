import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Post from "./pages/Post";
import Admin from "./pages/Admin";

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
      <div className="main">
        <Nav user={user} />
        <div className="container">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/edit/:id?">
              <Edit />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/post/:id" children={<Post user={user} />} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
