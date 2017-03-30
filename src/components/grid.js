import React, {Component} from 'react'
import {Grid, Image} from 'semantic-ui-react'

class GifGrid extends React.Component {
  render() {
    console.log(this.props.gifs);
    let gifArray = this.props.gifs.map((gif)=>
    <Grid.Column>
      <Image src={gif.images.fixed_width.url}/>
    </Grid.Column>
    );
    return (
      <Grid container columns={3}>
        {gifArray}
      </Grid>
    );
  }
}

export default GifGrid;
