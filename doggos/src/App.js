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
    axios.get('https://dog.ceo/api/breed/hound/images')
    .then(res => {
      console.log(res);
      this.setState({
        ...this.state,
        doggos: res.data.message
      });

    }) // happy path
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