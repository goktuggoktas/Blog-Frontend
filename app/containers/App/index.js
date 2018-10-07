/**
 *
 * App
 *
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Blog from 'containers/Blog/Loadable';
import Home from '../Home/Loadable';
import Navbar from '../../components/Spesific/Navbar';
import BlogShow from '../BlogShow';
import Admin from '../Admin/Loadable';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

/* eslint-disable react/prefer-stateless-function */
export class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
        >
          <meta
            name="description"
            content="A React.js Boilerplate application"
          />
        </Helmet>
        <div className={classes.layout}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/categories/:id" component={Blog} />
            <Route path="/blogs/:id" component={BlogShow} />
            <Route path="/admin" component={Admin} />

            <Route path="" component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
