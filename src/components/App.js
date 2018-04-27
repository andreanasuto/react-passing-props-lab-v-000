import React from 'react';

import FruitBasket from './FruitBasket';

// const App = () => <FruitBasket />;

class App extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
      filters: [],
      fruit: [],
      currentFilter: null
    }
  }

  componentDidMount() {
    this.fetchFilters()
    this.fetchFruit()
  }

  fetchFilters = () => {
      fetch('/api/fruit_types')
        .then(response => response.json())
        .then(filters => this.setState({ filters }));
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ fruit }));
  }

  updateFilter = event => {
    console.log('update filter to: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }


  render() {
    return (
      <FruitBasket fruit={this.state.fruit} filters={this.state.filters}/>
    )
  }
}

export default App;
