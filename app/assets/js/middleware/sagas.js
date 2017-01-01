import {
  call,
  put,
  takeEvery,
  takeLatest
} from 'redux-saga/effects'
//import Api from '...'


const fetchImages = (word) => {
  return fetch('/api/image/' + word, {
    method: 'GET'
  })
    .then(function(response) {
      console.log(response)
      return response.json();
    })
    .catch(function(error) {
      // TODO: clean this up
      // yield put({
      //   type: "USER_FETCH_FAILED",
      //   message: e.message
      // });
    })
};

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  console.log(action)
  try {
    const data = yield fetchImages('car');
    yield put({
      type: "USER_FETCH_SUCCEEDED",
      data: data
    });
  } catch (e) {
    yield put({
      type: "USER_FETCH_FAILED",
      message: e.message
    });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* mySaga() {
//   yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;
