import React, {Component} from 'react'
import {Grid, Image} from 'semantic-ui-react'

class GifGrid extends React.Component {
  render() {
    console.log(this.props.gifs);
    return (
      <Grid container columns={3}>
        <Grid.Column>
          <Image src='https://skpsoft.com/baby/wp-content/uploads/2016/09/default-thumbnail.jpg'/>
        </Grid.Column>
        <Grid.Column>
          <Image src='https://skpsoft.com/baby/wp-content/uploads/2016/09/default-thumbnail.jpg'/>
        </Grid.Column>
        <Grid.Column>
          <Image src='https://skpsoft.com/baby/wp-content/uploads/2016/09/default-thumbnail.jpg'/>
        </Grid.Column>
        <Grid.Column>
          <Image src='https://skpsoft.com/baby/wp-content/uploads/2016/09/default-thumbnail.jpg'/>
        </Grid.Column>
        <Grid.Column>
          <Image src='https://skpsoft.com/baby/wp-content/uploads/2016/09/default-thumbnail.jpg'/>
        </Grid.Column>
        <Grid.Column>
          <Image src='https://skpsoft.com/baby/wp-content/uploads/2016/09/default-thumbnail.jpg'/>
        </Grid.Column>
        <Grid.Column>
          <Image src='https://skpsoft.com/baby/wp-content/uploads/2016/09/default-thumbnail.jpg'/>
        </Grid.Column>
        <Grid.Column>
          <Image src='https://skpsoft.com/baby/wp-content/uploads/2016/09/default-thumbnail.jpg'/>
        </Grid.Column>
      </Grid>
    );
  }
}

export default GifGrid
