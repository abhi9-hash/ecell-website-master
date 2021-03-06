import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import  EventPage from "views/Components/Sections/Album1.js";
import TeamPage from "views/TeamPage/TeamPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/team" component={TeamPage} />
      <Route path="/events" component={EventPage} />
      <Route path="/" component={Components} />
      
    </Switch>
  </Router>,
  document.getElementById("root")
);
