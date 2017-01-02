const pictures = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_PICTURES': // fall-through
    case 'FETCH_PICTURES_SUCCESS':
      return action.pictures;
   case 'FETCH_PICTURES_ERROR':
      // TODO
      return state;
    default:
      return state;
  }
}

export default pictures
