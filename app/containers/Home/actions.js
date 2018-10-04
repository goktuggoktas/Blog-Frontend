/*
 *
 * Home actions
 *
 */

import {
  LOAD_LAST_SIX_BLOG_POSTS,
  LOAD_LAST_SIX_BLOG_POSTS_SUCCESS,
  LOAD_LAST_SIX_BLOG_POSTS_ERROR,
} from './constants';

export function loadLastSixBlogPosts() {
  return {
    type: LOAD_LAST_SIX_BLOG_POSTS,
  };
}

export function loadedLastSixBlogPosts(data) {
  return {
    type: LOAD_LAST_SIX_BLOG_POSTS_SUCCESS,
    data,
  };
}

export function errorLoadLastSixBlogPosts(error) {
  return {
    type: LOAD_LAST_SIX_BLOG_POSTS_ERROR,
    error,
  };
}
