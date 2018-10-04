import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { loadedBlogPosts, errorLoadBlogPosts } from './actions';
import { LOAD_BLOG_POSTS } from './constants';

export function* getBlogPosts(action) {
  const requestURL = `https://blog-backend-.herokuapp.com/categories/${
    action.categoryId
  }/blogs`;
  try {
    const blogPosts = yield call(request, requestURL);
    yield put(loadedBlogPosts(blogPosts));
  } catch (err) {
    yield put(errorLoadBlogPosts(err));
  }
}

export default function* BlogPosts() {
  yield takeLatest(LOAD_BLOG_POSTS, getBlogPosts);
}
