import React, { Component, PropTypes } from 'react'
import './icon-button.scss';

class IconButton extends Component {
  render() {
    const { text, handleClick, classList } = this.props;
    return <button className={ classList } onClick={ handleClick }>{ text }</button>;
  }
}

IconButton.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
  classList: PropTypes.string
};

IconButton.defaultProps = {
  text: '',
  handleClick: function() {/* NOOP */}
}

export default IconButton
