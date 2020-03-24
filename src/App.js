import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Midterm from "./components/pages/Midterm";
import Note from "./components/pages/Note";
import NotFound from "./components/pages/NotFound";
import Sample from "./components/pages/Sample";

import { } from "./App.module.scss";

export default () => {
  return (
    <Switch>
      <Route path="/notes" component={Note}/>
      <Route path="/samples" component={Sample}/>
      <Route path="/midterm" component={Midterm}/>
      <Route exact path="/" component={Home}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  );
};
