/**
 *
 * BlogShow
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Parallax from '../../components/Common/Parallax';
import styles from './style';

/* eslint-disable react/prefer-stateless-function */
const BlogShow = props => (
  <div>
    <Parallax
      filter
      image="https://demos.creative-tim.com/material-kit-react/static/media/bg4.199e9ec1.jpg"
    >
      <div className={props.classes.container}>
        <Grid item xs={12} sm={6} className={props.classes.paddingLeftSize}>
          <h1 className={props.classes.title}>
            {props.location.state.blog.title}
          </h1>
          <h4>{props.location.state.blog.content}</h4>
        </Grid>
      </div>
    </Parallax>
    <div className={props.classes.main}>
      <div className={props.classes.container}>
        <p className={props.classes.textDecorationStyle}>
          {props.location.state.blog.content}
          {props.location.state.blog.content}
          {props.location.state.blog.content}
          {props.location.state.blog.content}
          {props.location.state.blog.content}
          {props.location.state.blog.content}
          {props.location.state.blog.content}

          {props.location.state.blog.content}
          {props.location.state.blog.content}
          {props.location.state.blog.content}
        </p>
      </div>
    </div>
  </div>
);

BlogShow.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  classes: PropTypes.object,
  location: PropTypes.object,
};

export default withStyles(styles)(BlogShow);
