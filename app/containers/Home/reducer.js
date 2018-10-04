/*
 *
 * Home reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_LAST_SIX_BLOG_POSTS,
  LOAD_LAST_SIX_BLOG_POSTS_SUCCESS,
  LOAD_LAST_SIX_BLOG_POSTS_ERROR,
} from './constants';

export const initialState = fromJS({
  blogPosts: [],
  loading: false,
  error: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_LAST_SIX_BLOG_POSTS:
      return state.set('loading', true).set('error', false);
    case LOAD_LAST_SIX_BLOG_POSTS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('blogPosts', fromJS(action.data));
    case LOAD_LAST_SIX_BLOG_POSTS_ERROR:
      return state.set('loading', false).set('error', action.error);
    default:
      return state;
  }
}

export default homeReducer;
