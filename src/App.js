import React, {Component} from 'react';
import Header from './components/header';
import SearchBar from './components/searchbar';
import GifGrid from './components/grid';
import './App.css';
// let gifs = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    };
    this.searchGiphy = this.searchGiphy.bind(this);
  }
  searchGiphy = (event) => {
    if (event.key === 'Enter') {
      fetch('http://api.giphy.com/v1/gifs/search?q=' + event.target.value + '&api_key=dc6zaTOxFJmzC', {method: 'get'}).then(function(response) {
        return response.json();
      }).then(function(result) {
        this.setState({gifs: result.data});
        console.log(result.data);
      }).catch(function(err) {
        // Error :(
      });
    }
  }
  render() {

    return (
      <div className="App">
        <Header/>
        <SearchBar searchGiphy={this.searchGiphy}/>
        <br/>
        <GifGrid gifs={this.state.gifs}/>
      </div>
    );
  }
}

export default App;
