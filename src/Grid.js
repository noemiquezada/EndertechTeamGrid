import React, { Component } from 'react';
import './Grid.css';

import GridItem from './GridItem';

class Grid extends Component {
  render() {
    return (
      <div className="grid">
          {this.props.items.map(function(item, key){
            return (
                <GridItem person={item} key={key}/>
            )
          })}
      </div>
    );
  }
}

export default Grid;
