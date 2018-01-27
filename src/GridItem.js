import React, { Component } from 'react';
import './GridItem.css';

class GridItem extends Component {
  render() {
    return (
      <div className="gridItem">
        <img src="http://via.placeholder.com/300x300" alt="placeholder"/>
        <h2>{this.props.person.name}</h2>
        <p>{this.props.person.division}</p>
      </div>
    );
  }
}

export default GridItem;
