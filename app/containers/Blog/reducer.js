/*
 *
 * Blog reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_BLOG_POSTS,
  LOAD_BLOG_POSTS_SUCCESS,
  LOAD_BLOG_POSTS_ERROR,
} from './constants';

export const initialState = fromJS({
  blogPosts: [],
  categoryId: null,
  loading: false,
  error: false,
});

function blogReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BLOG_POSTS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('categoryId', fromJS(action.categoryId));
    case LOAD_BLOG_POSTS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('blogPosts', fromJS(action.data));
    case LOAD_BLOG_POSTS_ERROR:
      return state.set('loading', false).set('error', action.error);
    default:
      return state;
  }
}

export default blogReducer;
