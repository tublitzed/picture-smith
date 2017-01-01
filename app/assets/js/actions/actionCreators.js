import * as types from '../constants/ActionTypes'

// TODO: will work initially for one word. Once that's running, then
// modify this to work for entire sentence.
export const submitPhrase = (phrase) => ({
  type: types.SUBMIT_PHRASE,
  phrase
})

export const changePhrase = (phrase) => ({
  type: types.CHANGE_PHRASE,
  phrase
})

export const changePictures = (pictures) => ({
  type: types.CHANGE_PICTURES,
  pictures
})

export const fetchPicturesSuccess = (data) => ({
  type: types.FETCH_PICTURES_SUCCESS,
  data
})

export const fetchPicturesError = (data) => ({
  type: types.FETCH_PICTURES_ERROR,
  data
})
