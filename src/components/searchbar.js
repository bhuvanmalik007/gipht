import React from 'react';
import {Input} from 'semantic-ui-react'

const SearchBar = (props) => (
  <div className="Search">
    <Input type="text" size='massive' icon='search' placeholder='Search...' onKeyPress={props.searchGiphy}/>
  </div>
)

export default SearchBar;
