import React, { FC, useState } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import { GlobalStyle } from "./style/GlobalStyle";
import { LoginPage, Main, AdminPage } from "./pages";
import CheckToken from "./components/CheckToken";

const App: FC = () => {
  const [token, setToken] = useState<{
    accessToken: string;
    sessionToken: string;
  }>({ accessToken: "", sessionToken: "" });

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route
          path="/login"
          exact
          render={() => <LoginPage setToken={setToken} />}
        />
        <CheckToken token={token}>
          <Route path="/" exact component={Main} />
          <Route path="/administration" exact component={AdminPage} />
        </CheckToken>
      </Switch>
    </BrowserRouter>
  );
};

export default hot(App);
