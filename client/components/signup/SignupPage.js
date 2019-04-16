import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignupForm from './SignupForm';
import { userSignupRequest } from '../../actions/signupActions';

class SignupPage extends Component {
  render() {
    const { userSignupRequest } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <SignupForm userSignupRequest={userSignupRequest} />
          </div>
        </div>
      </div>
    )
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.propTypes.func.isRequired,
};

export default connect(null, { userSignupRequest })(SignupPage);
