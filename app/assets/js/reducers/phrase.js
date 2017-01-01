// Remember here that this is only the phrase part of the state,
// not the entire state object.
const phrase = (state = '', action) => {
  switch (action.type) {
    case 'SUBMIT_PHRASE':
      console.log(state);
      console.log(action);
      return state;
    case 'CHANGE_PHRASE':
      return action.phrase;
    default:
      return state;
  }
}

export default phrase
