import React from "react";
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { hot } from "react-hot-loader/root";

const App = () => {
  return(
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" />
          <Route path="/login" />
          <Route path="/administration" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default hot(App);