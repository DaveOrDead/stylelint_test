import React, { Component, PropTypes } from 'react'
import './input-field.scss';

class InputField extends Component {
  render() {
    const { value, handleChange, isHidden } = this.props;
    return <input type="text" value={value} onChange={(event) => handleChange(event.target.value)} hidden={isHidden} />;
  }
}

InputField.propTypes = {
  value: React.PropTypes.string,
  handleChange: React.PropTypes.func
};

InputField.defaultProps = {
  value: '',
  handleChange: function() {/* NOOP */}
}

export default InputField
