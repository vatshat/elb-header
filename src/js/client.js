import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Headers from "./pages/Headers";
import Todos from "./pages/Todos";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      // 9- everytime we change the route a brand new virtual component gets created because of virtual DOM's 
      <IndexRoute component={Todos}></IndexRoute>
      <Route path="headers" component={Headers}></Route>
      <Route path="settings" component={Settings}></Route>
    </Route>
  </Router>,
app);
