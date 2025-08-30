import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./main.tsx.css";
import App from "./App";
import {OidcProvider, OidcSecure} from "@axa-fr/react-oidc";
import configuration from "./configuration";
import {SSOEnabled} from "./configuration";
import Authenticating from "./callbacks/Authenticating";
import AuthenticationError from "./callbacks/AuthenticationError";
import Loading from "./callbacks/Loading";
import SessionLost from "./callbacks/SessionLost";
import {HelmetProvider} from "react-helmet-async";

import "material-icons/iconfont/filled.css";
import "material-icons/iconfont/outlined.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      {SSOEnabled ? (
        <OidcProvider
          configuration={configuration}
          authenticatingComponent={Authenticating}
          authenticatingErrorComponent={AuthenticationError}
          loadingComponent={Loading}
          sessionLostComponent={SessionLost}
        >
          <OidcSecure>
            <App />
          </OidcSecure>
        </OidcProvider>
      ) : (
        <App />
      )}
    </HelmetProvider>
  </StrictMode>,
);
