import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import SignupForm from './SignupForm';
import { userSignupRequest, isUserExists } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages';

class SignupPage extends Component {
  render() {
    const { userSignupRequest, addFlashMessage, isUserExists } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <SignupForm
              userSignupRequest={userSignupRequest}
              addFlashMessage={addFlashMessage}
              isUserExists={isUserExists}
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
  isUserExists: propTypes.func.isRequired,
};

export default connect(null, { userSignupRequest, addFlashMessage, isUserExists })(SignupPage);
