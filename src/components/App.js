import React from 'react';

import FruitBasket from './FruitBasket';

// const App = () => <FruitBasket />;

class App extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    
  }
  }

  componentDidMount() {
    this.fetchFilters()
  }
  
  fetchFilters = () => {
      fetch('/api/fruit_types')
        .then(response => response.json())
        .then(filters => this.setState({ filters }));
  }

  
  render() {
    return (
      <FruitBasket />
    )
  }
}

export default App;
