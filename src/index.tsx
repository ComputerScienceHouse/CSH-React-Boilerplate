import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {
  AuthenticationProvider,
  oidcLog,
  InMemoryWebStorage,
} from "@axa-fr/react-oidc-context";
import oidcConfiguration from "./config";
import PageContainer from "./containers/PageContainer";
import LoggingIn from "./callbacks/LoggingIn";

ReactDOM.render(
  <AuthenticationProvider
    configuration={oidcConfiguration}
    loggerLevel={oidcLog.DEBUG}
    isEnabled={true}
    UserStore={InMemoryWebStorage}
    callbackComponentOverride={LoggingIn}
  >
    <App />
  </AuthenticationProvider>,
  document.getElementById("root")
);
