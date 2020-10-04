import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { withOidcSecure } from "@axa-fr/react-oidc-context";
import { Home } from "./index";
import PageContainer from "../containers/PageContainer";

const ProtectedHome = withOidcSecure(Home);

class App extends Component {
  render() {
    return (
      <Router>
        <PageContainer>
          <Switch>
            <Route exact path="/" component={ProtectedHome} />
          </Switch>
        </PageContainer>
      </Router>
    );
  }
}

export default App;
