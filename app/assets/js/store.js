import {
  createStore,
  compose,
  applyMiddleware
} from 'redux';
import createSagaMiddleware from 'redux-saga'

// import the root reducer.
import rootReducer from './reducers';

// import the saga middleware (which handles ajax requests)
import submitSaga from './middleware/sagas'
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(submitSaga);

export default store;
