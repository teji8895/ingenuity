
import React, {Component} from 'react';
import {FormGroup,InputGroup,Button,FormControl,Glyphicon} from 'react-bootstrap';

import "./Search.css"
import logo from './need.png';

class Searchbox extends Component
{
render(){
    return(
        
<div className="Search">

<div  className="eqms-logo">
<img src={logo}  alt="logo" />
</div>

<div className="Relative"> 

<FormGroup >
    <InputGroup  >
      <FormControl type="text" placeholder="Enter the search Item here"   style={{border: '2px solid lightblue'}}/>
      <InputGroup.Button>
      <Button style={{top:'-7px'}}>
        <Glyphicon glyph="search" />search
      </Button>
      </InputGroup.Button>
    </InputGroup>
  </FormGroup>

</div>


  </div>
    );}
}
export default Searchbox;