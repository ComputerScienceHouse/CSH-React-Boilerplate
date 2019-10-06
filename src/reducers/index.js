import { combineReducers } from 'redux'
import { reducer as oidcReducer } from 'redux-oidc'
import { connectRouter } from 'connected-react-router'

function apis (state = {
  isFetching: false
},
action) {
  switch (action.type) {
    default:
      return state
  }
}

export default (history) => combineReducers({
  router: connectRouter(history),
  oidc: oidcReducer,
  apis
})
