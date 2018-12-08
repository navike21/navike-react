import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Header from "./header";
import Home from "./home/home";

function CustomLinkExample() {
  return (
    <Router>
      <div className="w_100">
        <Header />
        <div className="wrapp w_100">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-me" component={About} />
          <Route component={NoMatch} />
        </Switch>
        </div>
      </div>
    </Router>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function NoMatch({ location }) {
  return (
    <div>
      <h3>
        Error 404
      </h3>
    </div>
  );
}

export default CustomLinkExample;
