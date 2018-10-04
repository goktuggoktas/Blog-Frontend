import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectNavbarDomain = state => state.get('navbar', initialState);

const makeSelectCategories = () =>
  createSelector(selectNavbarDomain, substate =>
    substate.get('categories').toJS(),
  );

export { selectNavbarDomain, makeSelectCategories };
