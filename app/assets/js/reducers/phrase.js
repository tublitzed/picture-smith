const phrase = (state = [], action) => {
  switch (action.type) {
    case 'SET_SENTENCE':
      return action.phrase
    default:
      return state
  }
}

export default phrase
