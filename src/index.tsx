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
import { LoggingIn } from "./callbacks/LoggingIn";
import { Authenticating } from "./callbacks/Authenticating";
import { NotAuthenticated } from "./callbacks/NotAuthenticated";
import { NotAuthorized } from "./callbacks/NotAuthorized";

ReactDOM.render(
  <AuthenticationProvider
    configuration={oidcConfiguration}
    loggerLevel={oidcLog.DEBUG}
    isEnabled={true}
    UserStore={InMemoryWebStorage}
    callbackComponentOverride={LoggingIn}
    authenticating={Authenticating}
    notAuthenticated={NotAuthenticated}
    notAuthorized={NotAuthorized}
  >
    <App />
  </AuthenticationProvider>,
  document.getElementById("root")
);
