import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { loadedLastSixBlogPosts, errorLoadLastSixBlogPosts } from './actions';
import { LOAD_LAST_SIX_BLOG_POSTS } from './constants';

export function* getLastSixBlogPosts() {
  const requestURL = `https://blog-backend-.herokuapp.com/`;
  try {
    const blogPosts = yield call(request, requestURL);
    yield put(loadedLastSixBlogPosts(blogPosts));
  } catch (err) {
    yield put(errorLoadLastSixBlogPosts(err));
  }
}

export default function* BlogPosts() {
  yield takeLatest(LOAD_LAST_SIX_BLOG_POSTS, getLastSixBlogPosts);
}
