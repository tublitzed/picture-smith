const pictures = (state = [], action) => {
  switch (action.type) {
    case 'USER_FETCH_SUCCEEDED':
      console.log('yep success')
      console.log(action)
      return state;
   case 'USER_FETCH_FAILED':
      console.log('yep! fail')
      console.log(action)
      return state;
    default:
      return state;
  }
}

export default pictures
