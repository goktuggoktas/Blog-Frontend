import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { AUTH } from './constants';
import { authSuccess, authFail } from './actions';

export function* auth(action) {
  const requestURL = `https://blog-backend-.herokuapp.com/auth/login`;
  const formData = new FormData();
  const param = {
    email: action.action.username,
    password: action.action.password,
  };
  Object.keys(param).forEach(key => formData.append(key, param[key]));
  try {
    const accessToken = yield call(request, requestURL, {
      method: 'POST',
      body: formData,
    });
    window.localStorage.setItem('accessToken', accessToken.auth_token);
    yield put(authSuccess(accessToken));
  } catch (err) {
    yield put(authFail(err));
  }
}

export default function* BlogPosts() {
  yield takeLatest(AUTH, auth);
}
