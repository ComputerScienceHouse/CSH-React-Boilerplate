import { createStore, applyMiddleware, compose } from 'redux'
import { loadUser } from 'redux-oidc'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'
import userManager from './userManager'

const initialState = {}
const history = createBrowserHistory()

const middleware = compose(
  applyMiddleware(routerMiddleware(history))
)

const store = createStore(
  createRootReducer(history),
  initialState,
  middleware
)

loadUser(store, userManager)

export { history }
export default store
