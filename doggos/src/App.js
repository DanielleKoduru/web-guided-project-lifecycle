import React from 'react';
import axios from 'axios';
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      doggos: [],
      dogBreed: ""
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Hello webpt22!</h1>
      </div>

    )
  }
}

export default App;