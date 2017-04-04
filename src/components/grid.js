import React, {Component} from 'react'
import {Card, Container} from 'semantic-ui-react'

class GifGrid extends React.Component {

  render() {
    let gifArray = this.props.gifs.map((gif)=>
    <Card color='black' image={gif.images.fixed_width.url} />
    );
    return (
      <Container>
        <Card.Group itemsPerRow={5}>
          {gifArray}
        </Card.Group>
      </Container>
    );
  }
}

export default GifGrid;
