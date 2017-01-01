import * as types from '../constants/ActionTypes'

export const submitPhrase = () => ({
  type: 'USER_FETCH_REQUESTED'
})

export const changePhrase = (phrase) => ({
  type: types.CHANGE_PHRASE,
  phrase
})
