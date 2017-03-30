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
  }

  searchGiphy = (event) =>{
    var that = this;
    if (event.key === 'Enter') {
      fetch('http://api.giphy.com/v1/gifs/search?q=' + event.target.value + '&api_key=dc6zaTOxFJmzC', {method: 'get'})
      .then(res => res.json())
      .then(result => that.setState({gifs: result.data}));
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <SearchBar searchGiphy={this.searchGiphy}/>
        <br/>
        <GifGrid gifs={this.state.gifs} className="Grid"/>
      </div>
    );
  }
}

export default App;
