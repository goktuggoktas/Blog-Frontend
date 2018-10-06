import React from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from '../LoadingIndicator';
import BlogCardContainer from '../../Common/Card';

export class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredBlogs: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.categoryUrl.pathname !== nextProps.categoryUrl.pathname) {
      this.setState({ filteredBlogs: null });
    }
  }

  tagFilter = tag => {
    this.setState({
      filteredBlogs: this.props.data.filter(blog =>
        blog.tag_list.includes(tag),
      ),
    });
  };

  render() {
    const { loading, data, error, goToBlog } = this.props;
    const { filteredBlogs } = this.state;
    const blogs = filteredBlogs || data;
    if (loading) {
      return <LoadingIndicator />;
    }

    if (error) {
      return <div>Error</div>;
    }

    return (
      <div>
        <BlogCardContainer
          blogs={blogs}
          onClick={goToBlog}
          tagFilter={tag => this.tagFilter(tag)}
          loading={loading}
          error={error}
        />
      </div>
    );
  }
}

BlogList.propTypes = {
  categoryUrl: PropTypes.object,
  data: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  goToBlog: PropTypes.func,
};

export default BlogList;
