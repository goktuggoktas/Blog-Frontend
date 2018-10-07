/*
 *
 * Admin reducer
 *
 */

import { fromJS } from 'immutable';
import { AUTH, AUTH_SUCCESS, AUTH_FAIL } from './constants';

export const initialState = fromJS({
  accessToken: null,
  loading: false,
  error: false,
});

function adminReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH:
      return state.set('loading', true).set('error', false);
    case AUTH_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('accessToken', action.accessToken.auth_token);
    case AUTH_FAIL:
      return state
        .set('loading', false)
        .set('error', action.err)
        .set('accessToken', null);
    default:
      return state;
  }
}

export default adminReducer;
