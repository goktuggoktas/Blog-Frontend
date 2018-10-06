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
import { withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import injectReducer from '../../../utils/injectReducer';
import injectSaga from '../../../utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { makeSelectCategories } from './selectors';
import { loadCategoryNames } from './actions';

const styles = theme => ({
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  toolbarTitle: {
    fontFamily: 'Inknut Antiqua',
    fontSize: '40px',
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
  },
});

/* eslint-disable react/prefer-stateless-function */
export class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  componentWillMount() {
    this.props.getCategoryNames();
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  gotoCategory(category) {
    this.props.history.push({
      pathname: `/categories/${category.id}`,
    });
  }

  render() {
    const { categories, classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Toolbar className={classes.toolbarMain}>
          <Button size="small">Subscribe</Button>
          <Typography
            component="h1"
            variant="headline"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            Blogger
          </Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button variant="outlined" size="small">
            Sign in
          </Button>
        </Toolbar>
        <Toolbar variant="dense" className={classes.toolbarSecondary}>
          {categories.map(category => (
            <Typography
              color="secondary"
              noWrap
              key={category.id}
              onClick={() => this.gotoCategory(category)}
            >
              {category.name}
            </Typography>
          ))}
        </Toolbar>
      </React.Fragment>
    );
  }
}

Navigation.propTypes = {
  categories: PropTypes.array,
  getCategoryNames: PropTypes.func,
  history: PropTypes.object,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  categories: makeSelectCategories(),
});

function mapDispatchToProps(dispatch) {
  return {
    getCategoryNames: () => dispatch(loadCategoryNames()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'navbar', reducer });
const withSaga = injectSaga({ key: 'navbar', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withRouter,
  withStyles(styles),
)(Navigation);
