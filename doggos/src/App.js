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

  componentDidMount() {
    axios.get('https://dog.cesdfasdfo/api/breed/hound/images')
    .then(res => console.log(res)) // happy path
    .catch(err => console.log(err)); // sad path :(
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