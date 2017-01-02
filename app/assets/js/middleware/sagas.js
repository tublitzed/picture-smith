import * as types from '../constants/ActionTypes'
import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects'

/**
 * Load all images via ajax.
 * @param  {String} phrase
 */
const doFetch = (phrase) => {
  const request = new Request('/api/images', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
      words: phrase.trim().split(' ')
    })
  });

  return fetch(request)
    .then(function(response) {
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
    const {
      data
    } = yield doFetch(action.phrase);
    yield put({
      type: "FETCH_PICTURES_SUCCESS",
      pictures: data.map((item) => {
        return {
          word: item.word,
          imageUrl: item.success ? item.data.icon.preview_url : null
        }
      })
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
