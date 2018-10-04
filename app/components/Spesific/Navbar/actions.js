/*
 *
 * Navbar actions
 *
 */

import {
  LOAD_CATEGORY_NAMES,
  LOAD_CATEGORY_NAMES_SUCCESS,
  LOAD_CATEGORY_NAMES_ERROR,
} from './constants';

export function loadCategoryNames() {
  return {
    type: LOAD_CATEGORY_NAMES,
  };
}

export function loadedCategoryNames(data) {
  return {
    type: LOAD_CATEGORY_NAMES_SUCCESS,
    data,
  };
}

export function errorLoadCategoryNames(error) {
  return {
    type: LOAD_CATEGORY_NAMES_ERROR,
    error,
  };
}
