import React from 'react';

import data from '../data';
import './styles.scss';

import Pokemon from './components/Pokemon';

class App extends React.Component {
  constructor() {
    console.log("app component constructor");
    super();
    this.state = {
      pokemon: []
    };
  }

  componentDidMount() {
    console.log("componentDidMount running");
    this.setState({ pokemon: data });
  }

  componentDidUpdate(prevState, prevProps) {
    console.log("componentDidUpdate running");
  }

  render() {
    console.log("app component rendering");
    return (
      <div className="App">
        <Pokemon pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;