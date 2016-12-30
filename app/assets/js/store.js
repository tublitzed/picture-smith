import { createStore, compose } from 'redux';

// import the root reducer.
import rootReducer from './reducers/index';

// create an object for the default data.
const defaultState = {
  phrase: 'foo'
};

const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
