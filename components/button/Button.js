import React, { Component, PropTypes } from 'react'
import './button.scss';

class Button extends Component {
  render() {
    const { text, handleClick, classList } = this.props;
    return <button className={ classList } onClick={ handleClick }>{ text }</button>;
  }
}

Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
  classList: PropTypes.string
};

Button.defaultProps = {
  text: '',
  handleClick: function() {/* NOOP */}
}

export default Button
