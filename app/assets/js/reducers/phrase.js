// set an initial value on state so that it is never empty.
const phrase = (state = [], action) => {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case 'SUBMIT_PHRASE':
      return state;
    case 'CHANGE_PHRASE':
      console.log('this should change the phrase');
      return Object.assign({}, state, { phrase: action.phrase });
    default:
      return state;
  }
}

export default phrase
