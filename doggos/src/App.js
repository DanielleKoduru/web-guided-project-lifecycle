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

  handleChanges = e => {
    this.setState({
      ...this.state,
      dogBreed: e.target.value
    })
  }

  componentDidMount() {
    axios.get('https://dog.ceo/api/breed/hound/images')
    .then(res => {
      // happy path
      console.log(res);
      this.setState({
        ...this.state,
        doggos: res.data.message
      });

    }) 
    .catch(err => console.log(err)); // sad path :(
  }

  render() {
    return (
      <div className="App">
        <h1>Hello webpt22!</h1>
        <input 
          placeholder="dog breed"
          value={this.state.dogBreed} // read value from compoennt state
          type="text"
          onChange={this.handleChanges} // write to component state
        />
        <button onClick={this.fetchDoggos} >Fetch Doggos</button>
        <div>
          {this.state.doggos.map((doggo) => {
            return <img width="200" className="doggo" src={doggo} key={doggo} />;
          })}
        </div>
      </div>

    )
  }
}

export default App;