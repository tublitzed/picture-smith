import * as types from '../constants/ActionTypes'

export const submitPhrase = (phrase) => ({
  type: types.SUBMIT_PHRASE,
  phrase
})

export const changePhrase = (phrase, pictures) => ({
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
