import React, { Component } from 'react';
import './App.css';

import Grid from './Grid';
import Filter from './Filter';
import Data from './Data';

class App extends Component {
  constructor(props) {
    super(props);

    this.team = Data.team;
    this.changeSelectedFilter = this.changeSelectedFilter.bind(this);

    this.state = {
      filter: 'division',
      selectedFilter: 'all',
      items: this.team
    }
  }

  changeSelectedFilter(e) {
    var selectedFilter = e.target.id;
    if (selectedFilter !== 'all') {
      var filteredItems = this.team.filter(function(item) {
        return item[this.state.filter] === selectedFilter
      }, this);
      this.setState({selectedFilter: e.target.id, items: filteredItems })
    } else {
      this.setState({selectedFilter: e.target.id, items: this.team })
    }

  }

  render() {
    return (
      <div className="app">
        <h1>Endertech Team</h1>
        <Filter items={[...new Set(Data.team.map(person => person[this.state.filter]))]} selected={this.state.selectedFilter} changeSelectedFilter={this.changeSelectedFilter}/>
        <Grid items={this.state.items}></Grid>
      </div>
    );
  }
}

export default App;

// Link: https://stackoverflow.com/questions/1960473/get-all-unique-values-in-an-array-remove-duplicates
// Link: https://stackoverflow.com/questions/36325711/communicate-between-parent-and-child-component-in-react-js
// Link: https://css-tricks.com/snippets/css/complete-guide-grid/
