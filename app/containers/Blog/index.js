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
import makeSelectBlog from './selectors';
import reducer from './reducer';
import saga from './saga';
import BlogCardContainer from '../../components/Common/Card';
import { loadBlogPosts } from './actions';

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
    const { blogPosts } = this.props;
    return (
      <div>
        <BlogCardContainer
          blogs={blogPosts}
          onClick={blog => this.goToBlog(blog)}
        />
      </div>
    );
  }
}

Blog.propTypes = {
  blogPosts: PropTypes.array,
  getBlogPosts: PropTypes.func.isRequired,
  match: PropTypes.object,
  history: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  blogPosts: makeSelectBlog(),
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
