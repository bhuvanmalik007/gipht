import React, {Component} from 'react';
import Header from './components/header';
import SearchBar from './components/searchbar';
import GifGrid from './components/grid';
import {Loader} from 'semantic-ui-react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      loading: false
    };
    this.searchGiphy = this.searchGiphy.bind(this);
  }

  searchGiphy(event) {
    var that = this;
    if (event.key === 'Enter') {
      this.setState({loading:true});
      fetch('http://api.giphy.com/v1/gifs/search?q=' + event.target.value + '&api_key=dc6zaTOxFJmzC', {method: 'get'}).then(res => res.json()).then(result => that.setState({gifs: result.data, loading:false}));
    }
  }

  render() {

    return (
      <div className="App">
        <Header/>
        <SearchBar searchGiphy={this.searchGiphy}/>
        <br/> {this.state.loading
          ? (
            <Loader size='massive'>Loading</Loader>
          )
          : (<GifGrid gifs={this.state.gifs} className="Grid"/>)}
      </div>
    );
  }
}

export default App;
