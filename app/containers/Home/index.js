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
import { makeSelectLastSixBlog } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadLastSixBlogPosts } from './actions';
import BlogCardContainer from '../../components/Common/Card';

/* eslint-disable react/prefer-stateless-function */
export class Home extends React.Component {
  componentWillMount() {
    this.props.getLastSixBlogPosts();
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

Home.propTypes = {
  blogPosts: PropTypes.array,
  getLastSixBlogPosts: PropTypes.func,
  history: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  blogPosts: makeSelectLastSixBlog(),
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
