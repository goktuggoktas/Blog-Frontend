/**
 *
 * Blog
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
  makeSelectBlog,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadBlogPosts } from './actions';
import BlogList from '../../components/Spesific/List';

/* eslint-disable react/prefer-stateless-function */
export class Blog extends React.Component {
  componentWillMount() {
    this.props.getBlogPosts(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.getBlogPosts(nextProps.match.params.id);
    }
  }

  goToBlog = blog =>
    this.props.history.push({ pathname: `/blogs/${blog.id}`, state: { blog } });

  render() {
    const { location, blogPosts, loading, error } = this.props;
    return (
      <BlogList
        categoryUrl={location}
        loading={loading}
        error={error}
        data={blogPosts}
        goToBlog={blog => this.goToBlog(blog)}
      />
    );
  }
}

Blog.propTypes = {
  blogPosts: PropTypes.array,
  getBlogPosts: PropTypes.func.isRequired,
  match: PropTypes.object,
  history: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  blogPosts: makeSelectBlog(),
  loding: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    getBlogPosts: categoryId => dispatch(loadBlogPosts(categoryId)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'blog', reducer });
const withSaga = injectSaga({ key: 'blog', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Blog);
