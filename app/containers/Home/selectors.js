import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHomeDomain = state => state.get('home', initialState);

const makeSelectLastSixBlog = () =>
  createSelector(selectHomeDomain, substate =>
    substate.get('blogPosts').toJS(),
  );

const makeSelectLoading = () =>
  createSelector(selectHomeDomain, substate => substate.get('loading'));

const makeSelectError = () =>
  createSelector(selectHomeDomain, substate => substate.get('error'));

export {
  selectHomeDomain,
  makeSelectLastSixBlog,
  makeSelectLoading,
  makeSelectError,
};
