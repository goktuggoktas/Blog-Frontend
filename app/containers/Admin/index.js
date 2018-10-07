/**
 *
 * Admin
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectAdmin, makeSelectAuthToken } from './selectors';
import reducer from './reducer';
import saga from './saga';
import SignIn from './signIn';
import { auth } from './actions';
import Form from './Form';

/* eslint-disable react/prefer-stateless-function */
export class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
    };
  }

  onChange(input, e) {
    this.setState({ [input]: e.target.value });
  }
  login() {
    this.props.getLogin(this.state);
  }
  render() {
    const { accessToken } = this.props;
    if (accessToken) {
      return (
        <div>
          <Form />
        </div>
      );
    }
    return (
      <SignIn
        login={e => this.login(e)}
        onChangeField={(i, e) => this.onChange(i, e)}
      />
    );
  }
}

Admin.propTypes = {
  getLogin: PropTypes.func,
  accessToken: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  admin: makeSelectAdmin(),
  accessToken: makeSelectAuthToken(),
});

function mapDispatchToProps(dispatch) {
  return {
    getLogin: param => {
      dispatch(auth(param));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'admin', reducer });
const withSaga = injectSaga({ key: 'admin', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Admin);
