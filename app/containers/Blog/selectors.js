import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectBlogDomain = state => state.get('blog', initialState);

const makeSelectBlog = () =>
  createSelector(selectBlogDomain, substate =>
    substate.get('blogPosts').toJS(),
  );
const makeSelectLoading = () =>
  createSelector(selectBlogDomain, substate => substate.get('loading'));

const makeSelectError = () =>
  createSelector(selectBlogDomain, substate => substate.get('error'));

export { selectBlogDomain, makeSelectBlog, makeSelectLoading, makeSelectError };
