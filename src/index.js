import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom"
import * as serviceWorker from "./serviceWorker";

render(
  <Router>
    <App/>
  </Router>,
  document.querySelector("#root")
);

serviceWorker.unregister();
