// import { combineReducers } from 'redux';
// import phrase from './phrase';


// const reducers = combineReducers({
//   phrase
// });

const reducers = (state = [], action) => {
  switch (action.type) {
    case 'SUBMIT_PHRASE':
      return state;
    case 'CHANGE_PHRASE':
      console.log('this should change the state:');
      console.log(action.phrase);
      console.log(state);
      return Object.assign({}, state, { phrase: action.phrase });
    default:
      return state;
  }
}

export default reducers
