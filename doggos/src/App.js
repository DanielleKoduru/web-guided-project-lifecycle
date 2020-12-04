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

  fetchDoggos = () => {
    axios.get(`https://dog.ceo/api/breed/${this.state.dogBreed}/images`)
    .then(res => {
      this.setState({
        ...this.state,
        doggos: res.data.message
      });
    })
    .catch(err => console.log(err));
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

  componentDidUpdate(prevProps, prevState) {
    // runs when state or props have been updated
    // always put logic within if statements to prevent infinite loops!

    // if statements here equivalent to useEffect dependency array
    if (prevState.doggos !== this.state.doggos) {
      console.log("doggos have changed!");
    }

    // Just for fun, but showing that we can add specific logic in CDU based on state and prop changes
    if (this.state.dogBreed === "chihuahua") {
      axios.get(`https://dog.ceo/api/breed/mastiff/images`)
      .then(res => {
        this.setState({
          ...this.state,
          doggos: res.data.message
        });
      })
      .catch(res => console.log(res));
    }
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