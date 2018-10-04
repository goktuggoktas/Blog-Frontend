import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { loadedCategoryNames, errorLoadCategoryNames } from './actions';
import { LOAD_CATEGORY_NAMES } from './constants';

export function* getCategories() {
  const requestURL = `https://blog-backend-.herokuapp.com/categories/`;
  try {
    const blogPosts = yield call(request, requestURL);
    yield put(loadedCategoryNames(blogPosts));
  } catch (err) {
    yield put(errorLoadCategoryNames(err));
  }
}

export default function* CategoryNames() {
  yield takeLatest(LOAD_CATEGORY_NAMES, getCategories);
}
