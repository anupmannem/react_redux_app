import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import TextFieldGroup from '../common/TextFieldGroup';
import { createEvent } from '../../actions/eventActions';

class EventForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      errors: {},
      isLoading: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmti(e) {
    e.preventDefault();
    this.props.createEvent(this.state);
  }

  render() {
    const { errors, title, isLoading } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Create new game event</h1>

        <TextFieldGroup
          name="title"
          value={title}
          onChange={this.onChange}
          error={errors.title}
        />

        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    );
  }
}

EventForm.propTypes = {
  createEvent: propTypes.func.isRequired,
};

export default connect(null, { createEvent })(EventForm);
