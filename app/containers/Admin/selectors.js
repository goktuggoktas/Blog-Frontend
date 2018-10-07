import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the admin state domain
 */

const selectAdminDomain = state => state.get('admin', initialState);

/**
 * Other specific selectors
 */

const makeSelectAuthToken = () =>
  createSelector(selectAdminDomain, substate => substate.get('accessToken'));

const makeSelectLoading = () =>
  createSelector(selectAdminDomain, substate => substate.get('loading'));

const makeSelectError = () =>
  createSelector(selectAdminDomain, substate => substate.get('error'));

/**
 * Default selector used by Admin
 */

const makeSelectAdmin = () =>
  createSelector(selectAdminDomain, substate => substate.toJS());

export {
  makeSelectAdmin,
  selectAdminDomain,
  makeSelectAuthToken,
  makeSelectLoading,
  makeSelectError,
};
