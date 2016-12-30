import * as types from '../constants/ActionTypes'

export const submitPhrase = () => ({
  type: types.SUBMIT_PHRASE
})

export const changePhrase = (phrase) => ({
  type: types.CHANGE_PHRASE,
  phrase
})
