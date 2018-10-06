/**
 *
 * Home
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectLastSixBlog,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadLastSixBlogPosts } from './actions';
import BlogList from '../../components/Spesific/List';

/* eslint-disable react/prefer-stateless-function */
export class Home extends React.Component {
  componentWillMount() {
    this.props.getLastSixBlogPosts();
  }

  goToBlog = blog =>
    this.props.history.push({ pathname: `/blogs/${blog.id}`, state: { blog } });

  render() {
    const { blogPosts, loading, error } = this.props;

    return (
      <BlogList
        loading={loading}
        error={error}
        data={blogPosts}
        goToBlog={blog => this.goToBlog(blog)}
      />
    );
  }
}

Home.propTypes = {
  blogPosts: PropTypes.array,
  getLastSixBlogPosts: PropTypes.func,
  history: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  blogPosts: makeSelectLastSixBlog(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    getLastSixBlogPosts: () => dispatch(loadLastSixBlogPosts()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Home);
