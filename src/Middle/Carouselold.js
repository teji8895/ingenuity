import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import logo from './logo.svg';


class Carouselold extends Component{

render(){
return(

<Carousel style={{backgroundColor:'black', height:'400px',paddingBottom:'10px'}}>
  <Carousel.Item>
    <img style={{height:'380px'}} alt ="EQMS Image1"src={logo} />
    <Carousel.Caption>
      <h3 >First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height:'380px'}} alt="EQMS Image2" src={logo} />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height:'380px'}} alt="EQMS Image3"src={logo}/>
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

);
}
}
export default Carouselold;