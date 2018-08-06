import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import { watcherSaga } from './sagas';
const initialState = {};

const sagaMiddleware = createSagaMiddleware();
const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const store = createStore(
  rootReducer,
  initialState,
  composeSetup(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(watcherSaga);

export default store;