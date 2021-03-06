import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

const TextFieldGroup = ({ field, value, label, error, type, onChange, checkUserExists }) => {
  return (
    <div className={cn('form-group', { 'has-error': error })}>
      <label className="control-label">{label}</label>
      <input
        onChange={onChange}
        onBlur={checkUserExists}
        field={field}
        value={value}
        error={error}
        type={type}
      />
      {error && <span className="help-block">{error}</span>}
    </div>
  );
};

TextFieldGroup.propTypes = {
  field: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  error: propTypes.string,
  type: propTypes.string,
  onChange: propTypes.func.isRequired,
  checkUserExists: propTypes.func,
};

TextFieldGroup.defaultProps = {
  type: 'text',
};

export default TextFieldGroup;
