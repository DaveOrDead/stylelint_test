import React, { Component, PropTypes } from 'react'
import './box.scss';

class Box extends Component {
  render() {
    const { text, handleClick } = this.props;
    return (
        <div className="c-box" onClick={ handleClick }>
            <p>{text}</p>
        </div>
        );
    }
}

Box.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func
};

Box.defaultProps = {
  text: '',
  handleClick: function() {/* NOOP */}
}

export default Box
