import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'

import rootReducer from './root-reducer'

const initialState = {};
const middlewares = [logger];

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middlewares), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

);

export default store;