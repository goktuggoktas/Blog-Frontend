/*
 *
 * Blog actions
 *
 */

import {
  LOAD_BLOG_POSTS,
  LOAD_BLOG_POSTS_SUCCESS,
  LOAD_BLOG_POSTS_ERROR,
} from './constants';

export function loadBlogPosts(categoryId) {
  return {
    type: LOAD_BLOG_POSTS,
    categoryId,
  };
}

export function loadedBlogPosts(data) {
  return {
    type: LOAD_BLOG_POSTS_SUCCESS,
    data,
  };
}

export function errorLoadBlogPosts(error) {
  return {
    type: LOAD_BLOG_POSTS_ERROR,
    error,
  };
}
