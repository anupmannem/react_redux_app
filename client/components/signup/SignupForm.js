import React, { Component } from 'react';
import map from 'lodash/map';
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
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const options = map(timezones, (val, key) => {
      <option key={val} val={val}>{key}</option>
    })
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community</h1>

        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            type="text"
            name={this.state.username}
            className="form-control"
            onChange={this.onChange}
          />
        </div>

        <div className="form-group">
          <label className="control-label">Email</label>
          <input
            type="email"
            name={this.state.email}
            className="form-control"
            onChange={this.onChange}
          />
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            type="password"
            name={this.state.password}
            className="form-control"
            onChange={this.onChange}
          />
        </div>

        <div className="form-group">
          <label className="control-label">Confirm Password</label>
          <input
            type="password"
            name={this.state.passwordConfirmation}
            className="form-control"
            onChange={this.onChange}
          />
        </div>

        <div className="form-group">
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
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">
            Signup
          </button>
        </div>
      </form>
    );
  }
}
