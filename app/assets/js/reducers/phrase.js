// set an initial value on state so that it is never empty.
const all = (state = [], action) => {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case 'SUBMIT_PHRASE':
      return state;
    case 'CHANGE_PHRASE':
      return action.phrase;
    default:
      return state;
  }
}

export default all
