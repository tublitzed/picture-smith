import * as types from '../constants/ActionTypes'
import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects'

/**
 * Load a single word via ajax
 * @param  {string} word
 */
const doFetch = (word) => {
  return fetch('/api/image/' + word)
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .catch(function(error) {
      // TODO
    })
};

/**
 * Will attempt to load pictures, and trigger actions
 * on success/failure.
 *
 * @param {Object} action - triggering action.
 */
function* fetchPictures(action) {
  try {
    const { data } = yield doFetch(action.phrase);
    const imageUrl = data.data.icon.preview_url;
    yield put({
      type: "FETCH_PICTURES_SUCCESS",
      // just one for now, will parse into more later
      pictures: [{
        imageUrl: imageUrl,
        phrase: action.phrase
      }]
    });
  } catch (e) {
    yield put({
      type: "FETCH_PICTURES_ERROR",
      message: e.message
    });
  }
}

/**
 * This will listen for any action of the matching type, and run the saga.
 *
 * Does not allow concurrent fetches. If types.SUBMIT_PHRASE gets
 * dispatched while a fetch is already pending, that pending fetch is cancelled
 * and only the latest one will be run. There is also a "takeEvery" that will allow concurrency.
 */
function* submitSaga() {
  yield takeLatest(types.SUBMIT_PHRASE, fetchPictures);
}

export default submitSaga;
