import React, { Component } from 'react';
import './Filter.css';

import FilterItem from './FilterItem';

class Filter extends Component {
  render() {
    return (
      <ul className="filter">
        <FilterItem item="all" changeSelectedFilter={this.props.changeSelectedFilter}/>
        {this.props.items.map(function(item, key){
          return (
              <FilterItem item={item} key={key} changeSelectedFilter={this.props.changeSelectedFilter}/>
          )
        }, this)}
      </ul>
    );
  }
}

export default Filter;
