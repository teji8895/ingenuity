import React, {Component} from 'react';
import {Carousel} from 'react-responsive-carousel';
import logo from './logo.svg';





class Carouselslide extends Component

 {
 
    render() {
        return (
            <div className='Carousel' >
          
          <Carousel  >
            
                <div >
                    <img  style={{width:'80%',height:'300px'}}src={logo}/>
                    <p className="legend">Legend 1</p>
                </div>
                <div >
                    <img style={{width:'80%',height:'300px'}} src={logo}/>
                    <p className="legend">Legend 2</p>
                </div>
                <div >
                    <img style={{width:'80%',height:'300px'}} src={logo} />
                    <p className="legend">Legend 3</p>
                </div>
                <div >
                    <img style={{width:'80%',height:'300px'}} src={logo} />
                    <p className="legend">Legend 4</p>
                </div>
                <div >
                    <img style={{width:'80%',height:'300px'}} src={logo}/>
                    <p className="legend">Legend 5</p>
                </div>
                <div >
                    <img style={{width:'80%',height:'300px'}} src={logo} />
                    <p className="legend">Legend 6</p>
                </div>
               
            </Carousel>
           </div>
        );
    }
}



