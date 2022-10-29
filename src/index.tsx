import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { OidcProvider, OidcSecure } from '@axa-fr/react-oidc'
import configuration from './configuration'
import Authenticating from './callbacks/Authenticating'
import AuthenticationError from './callbacks/AuthenticationError'
import Loading from './callbacks/Loading'
import SessionLost from './callbacks/SessionLost'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

// handle security in here, and routing in app

root.render(
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
)