const pictures = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PICTURES_SUCCESS':
      console.log('yep success')
      console.log(action)
      return action.pictures;
   case 'FETCH_PICTURES_ERROR':
      console.log('yep! fail')
      console.log(action)
      return state;
    default:
      return state;
  }
}

export default pictures
