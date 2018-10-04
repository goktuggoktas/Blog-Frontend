import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectBlogDomain = state => state.get('blog', initialState);

const makeSelectBlog = () =>
  createSelector(selectBlogDomain, substate =>
    substate.get('blogPosts').toJS(),
  );

export default makeSelectBlog;
export { selectBlogDomain };
