import React, {Component} from 'react';
import {Input} from 'semantic-ui-react'

// const handleKeyPress = (event) => {
//   if (event.key == 'Enter') {
//     console.log(event.target.value);
//     fetch('http://api.giphy.com/v1/gifs/search?q=' + event.target.value +  '&api_key=dc6zaTOxFJmzC', {
// 	method: 'get'
// }).then(function(response) {
// 	return response.json();
// }).then(function(result){
//   console.log(result);
// }).catch(function(err) {
// 	// Error :(
// });
//
//   }
// }

const SearchBar = (props) => (
  <div className="Search">
    <Input type="text" size='massive' icon='search' placeholder='Search...' onKeyPress={props.searchGiphy}/>
  </div>
)

export default SearchBar;
