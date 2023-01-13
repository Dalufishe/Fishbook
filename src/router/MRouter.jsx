import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "../pages/home/Home";

export default function MRouter() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Redirect exact from="/" to="/home" />
      </Switch>
    </HashRouter>
  );
}
