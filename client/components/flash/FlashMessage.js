import React, { Component } from 'react';
import propTypes from 'prop-types';
import cn from 'classnames';

class FlashMessage extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.deleteFlashMessage(this.props.id);
  }

  render() {
    const { id, type, text } = this.props.message;
    return (
      <div className={cn('alert', {
        'alert-success': type === 'success',
        'alert-danger': type === 'error',
      })}>
        <button onclick={this.onClick} className="close"><span>&times;</span></button>
        {text}
      </div>
    )
  }
}

FlashMessage.propTypes = {
  message: propTypes.object.isRequired,
  deleteFlashMessage: propTypes.func.isRequired,
};

export default FlashMessage;