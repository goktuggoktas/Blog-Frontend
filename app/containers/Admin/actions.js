/*
 *
 * Admin actions
 *
 */

import { AUTH, AUTH_SUCCESS, AUTH_FAIL } from './constants';

export function auth(action) {
  return {
    type: AUTH,
    action,
  };
}

export function authSuccess(accessToken) {
  return {
    type: AUTH_SUCCESS,
    accessToken,
  };
}

export function authFail(err) {
  return {
    type: AUTH_FAIL,
    err,
  };
}
