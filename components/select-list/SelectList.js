import React, { Component, PropTypes } from 'react'
import './select-list.scss';

class SelectList extends Component {
  render() {

    const { items, selectedId, defaultValue, isHidden } = this.props;

    return (
        <span className="select-container" hidden={ isHidden }>
            <select onChange={(event) => this.change(event)} value={selectedId} defaultValue={defaultValue} hidden={ isHidden }>
      { items.map((item) =>
          <option key={item.id} value={item.id } disabled={item.isDisabled}>{ item.name }</option>
        ) }
    </select>
    </span>
    );
  }

  change(event) {
    for(var i in this.props.items) {
      var item = this.props.items[i];
      if(item.id != event.target.value) continue;

      this.props.handleSelectionChanged(item);
      return;
    }
  }
}

SelectList.propTypes = {
  items: PropTypes.array,
  selectedId: PropTypes.string,
  handleSelectionChanged: PropTypes.func
};

SelectList.defaultProps = {
  items: [],
  selectedId: undefined,
  handleSelectionChanged: function(item) { /* NOOP */ }
};

export default SelectList
