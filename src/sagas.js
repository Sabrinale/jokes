import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { API_CALL_REQUEST, SET_FETCHING_STATE_TRUE, SET_NEW_JOKES, CLEAR_JOKES_ON_ERROR  } from './actions/types';

export function* watcherSaga() {
  yield takeEvery(API_CALL_REQUEST, fetchJokesSaga);
}

function fetchJokes() {  
  return  axios({
    method: 'get',
    url: 'http://api.icndb.com/jokes/random/32'
  });   
} 

function replaceCharactor(payload){
  return payload.map(item =>
    item.joke = item.joke.replace(/&quot;/g,'"'));
}
function* fetchJokesSaga() {
  yield put({ type: SET_FETCHING_STATE_TRUE });

  try {
    const response = yield call(fetchJokes);
    const payload = response.data.value;
    replaceCharactor(payload);
    yield put({ type: SET_NEW_JOKES, payload });
  } 
  catch (error) {
    yield put({ type: CLEAR_JOKES_ON_ERROR, error });
  }
}