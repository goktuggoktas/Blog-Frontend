/*
 *
 * Navbar reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_CATEGORY_NAMES,
  LOAD_CATEGORY_NAMES_SUCCESS,
  LOAD_CATEGORY_NAMES_ERROR,
  ACTIVE_CATEGORY,
} from './constants';

export const initialState = fromJS({
  categories: [],
  loading: false,
  error: false,
  activeCategory: null,
});

function navbarReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIVE_CATEGORY:
      return state
        .set('loading', false)
        .set('error', false)
        .set('activeCategory', fromJS(action.category));
    case LOAD_CATEGORY_NAMES:
      return state.set('loading', true).set('error', false);
    case LOAD_CATEGORY_NAMES_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('categories', fromJS(action.data));
    case LOAD_CATEGORY_NAMES_ERROR:
      return state.set('loading', false).set('error', action.error);
    default:
      return state;
  }
}

export default navbarReducer;
