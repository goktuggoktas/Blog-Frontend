import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHomeDomain = state => state.get('home', initialState);

const makeSelectLastSixBlog = () =>
  createSelector(selectHomeDomain, substate =>
    substate.get('blogPosts').toJS(),
  );

export { selectHomeDomain, makeSelectLastSixBlog };
