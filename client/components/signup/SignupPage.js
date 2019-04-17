import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import SignupForm from './SignupForm';
import { userSignupRequest } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages';

class SignupPage extends Component {
  render() {
    const { userSignupRequest, addFlashMessage } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <SignupForm
              userSignupRequest={userSignupRequest}
              addFlashMessage={addFlashMessage}
            />
          </div>
        </div>
      </div>
    )
  }
}

SignupForm.propTypes = {
  userSignupRequest: propTypes.func.isRequired,
  addFlashMessage: propTypes.func.isRequired,
};

export default connect(null, { userSignupRequest, addFlashMessage })(SignupPage);
