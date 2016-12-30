// Remember here that this is only the phrase part of the state, not the entire
// state object.
const phrase = (state = '', action) => {
  switch (action.type) {
    case 'SUBMIT_PHRASE':
      return state;
    case 'CHANGE_PHRASE':
      return action.phrase;
    default:
      return state;
  }
}

export default phrase
