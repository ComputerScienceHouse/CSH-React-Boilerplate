import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { OidcProvider } from 'redux-oidc'
import configureStore from './store'
import userManager from './userManager'
import './index.css'
import ScopedApp from './containers/ScopedApp'

ReactDOM.render(
  <Provider store={configureStore}>
    <OidcProvider store={configureStore} userManager={userManager}>
      <ScopedApp/>
    </OidcProvider>
  </Provider>,
  document.getElementById('root')
)
