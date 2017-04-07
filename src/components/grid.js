import React from 'react'
import {Card, Container} from 'semantic-ui-react'
import {ToastMessage,ToastContainer} from 'react-toastr';

let ToastMessageFactory = React.createFactory(ToastMessage.animation);


// let addAlert = ()=>{
//     this.refs.container.success(
//       <strong>Download</strong>,
//       "RIght click->Save image as", {
//       timeOut: 30000,
//       extendedTimeOut: 10000,
//       preventDuplicates:true,
//       closeButton:true
//     });
//     // window.open("http://youtu.be/3SR75k7Oggg");
//   }

class GifGrid extends React.Component {
constructor(props){
  super(props);
  this.addAlert = this.addAlert.bind(this);
}
  addAlert(){
      this.refs.container.success(
        <strong>Right click any gif -> Save Image As..</strong>,
        "TO DOWNLOAD : ", {
        timeOut: 2000,
        extendedTimeOut: 10000,
        preventDuplicates:true,
        closeButton:true
      });
    }

  render() {
    let gifArray = this.props.gifs.map((gif)=>
    <Card key={gif.images.fixed_width.url} color='black' onClick={this.addAlert} image={gif.images.fixed_width.url} />
    );
    return (
      <div>
        <ToastContainer ref="container"
          toastMessageFactory={ToastMessageFactory}
          className="toast-top-right" />
        <Container>
          <Card.Group itemsPerRow={5}>
            {gifArray}
          </Card.Group>
        </Container>
      </div>
    );
  }
}

export default GifGrid;
