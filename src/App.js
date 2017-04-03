import React, {Component} from 'react';
import Header from './components/header';
import SearchBar from './components/searchbar';
import GifGrid from './components/grid';
import {Loader} from 'semantic-ui-react';
import Spinner from 'react-spinkit';
import About from './components/about';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      loading: false,
      currentTab: 'HOME'
    };
    this.searchGiphy = this.searchGiphy.bind(this);
  }


  searchGiphy(event) {
    var that = this;
    if (event.key === 'Enter') {
      this.setState({loading: true});
      this.setState({gifs: []});
      fetch('http://api.giphy.com/v1/gifs/search?q=' + event.target.value + '&api_key=dc6zaTOxFJmzC', {method: 'get'}).then(res => res.json())
      .then(result => {
        setTimeout(
          ()=>that.setState({gifs: result.data, loading: false})
        ,2500)
      })
      .catch(err => console.error(err));
    }
  }

  render() {
    this.tabChanger = (e, tabName) => {
      this.setState({currentTab: tabName.name});
    }
    // <Loader size='huge' className='Search'>Loading</Loader>
    return (
      <div className="App">
        <Header active={this.state.currentTab} tabChanger={this.tabChanger.bind(this)}/>

        {this.state.currentTab == 'HOME' &&
          (<div><SearchBar searchGiphy={this.searchGiphy}/>
            <br/>
            {this.state.loading && (<div className='Spinner'><Spinner spinnerName="three-bounce" /></div>)}
            {!this.state.loading && (<GifGrid gifs={this.state.gifs} className="Grid"/>)}
          </div>
          )}
        {this.state.currentTab == 'ABOUT' && <About className='About'/>}
      </div>
    );
  }
}

export default App;
