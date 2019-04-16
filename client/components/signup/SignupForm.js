import React, { Component } from 'react';
import map from 'lodash/map';
import cn from 'classnames';
import timezones from '../../data/timezones';

export default class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: '',
      errors: {},
      isLoading: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    this.setState({ errors: {}, isLoading: true });
    e.preventDefault();
    this.props.userSignupRequest(this.state)
      .then(
        () => { },
        ({ data }) => this.setState({ errors: data, isLoading: false }),
      );
  }

  render() {
    const { errors }
    const options = map(timezones, (val, key) => {
      <option key={val} val={val}>{key}</option>
    });
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community</h1>

        <div className={cn("form-group", { 'has-error': errors.username })}>
          <label className="control-label">Username</label>
          <input
            type="text"
            name={this.state.username}
            className="form-control"
            onChange={this.onChange}
          />
          {errors.username && <span className="help-block">{errors.username}</span>}
        </div>

        <div className={cn("form-group", { 'has-error': errors.email })}>
          <label className="control-label">Email</label>
          <input
            type="email"
            name={this.state.email}
            className="form-control"
            onChange={this.onChange}
          />
          {errors.email && <span className="help-block">{errors.email}</span>}
        </div>

        <div className={cn("form-group", { 'has-error': errors.password })}>
          <label className="control-label">Password</label>
          <input
            type="password"
            name={this.state.password}
            className="form-control"
            onChange={this.onChange}
          />
          {errors.password && <span className="help-block">{errors.password}</span>}
        </div>

        <div className={cn("form-group", { 'has-error': errors.passwordConfirmation })}>
          <label className="control-label">Confirm Password</label>
          <input
            type="password"
            name={this.state.passwordConfirmation}
            className="form-control"
            onChange={this.onChange}
          />
          {errors.passwordConfirmation && <span className="help-block">{errors.passwordConfirmation}</span>}
        </div>

        <div className={cn("form-group", { 'has-error': errors.timezone })}>
          <label className="control-label">Timezone</label>
          <select
            name="timezone"
            className="form-control"
            onChange={this.onChange}
            value={this.state.timezone}
          >
            <option value="" disabled>Choose your timezone</option>
            {options}
          </select>
          {errors.timezone && <span className="help-block">{errors.timezone}</span>}
        </div>

        <div className="form-group">
          <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
            Signup
          </button>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.propTypes.func.isRequired,
};
