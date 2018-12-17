import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Header from "./header";
import Home from "./home/home";
import About from "./about/about";

function CustomLinkExample() {
  return (
    <Router>
      <div className="w_100 section_middle_center">
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

function NoMatch({ location }) {
  return (
    <div>
      <h3>
        Error 404 :v
      </h3>
    </div>
  );
}

export default CustomLinkExample;
