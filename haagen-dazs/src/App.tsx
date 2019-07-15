import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import { GlobalStyle } from "../public/GlobalStyle";
import { LoginPage } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact />
        <Route path="/login" exact component={() => LoginPage()} />
        <Route path="/administration" exact />
      </Switch>
    </BrowserRouter>
  );
};

export default hot(App);
