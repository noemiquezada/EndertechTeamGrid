import React, { Component } from 'react';
import './GridItem.css';

class FilterItem extends Component {
  render() {
    return (
      <li id={this.props.item} className={'filterItem' + this.props.item === this.props.selectedFilter ? ' active' : ''}  onClick={this.props.changeSelectedFilter}>{this.props.item}</li>
    );
  }
}

export default FilterItem;
