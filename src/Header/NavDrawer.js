import React, {Component} from 'react';
import {Navbar, Nav, NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import './NavDrawer.css';
import Searchbox from './Search';








class Test extends Component
{
 
render(){

    return  (
      <div>
        
  
        <Searchbox/>

        <div>
        <Navbar className="Test">
        <Navbar.Collapse>
       <Nav>
       <NavItem eventKey={1}    style={{fontSize:'10px'}}  onClick={(e)  => { e.preventDefault(); window.location = "/#/" }} >
           Home
         </NavItem>


    <NavDropdown  style={{fontSize:'10px'}} eventKey={2} title="Company" onClick={(e)  => { e.preventDefault(); window.location = "/#/Company" }}>
      <MenuItem eventKey={2.1}>Action </MenuItem>
        <MenuItem eventKey={2.2}>Another action</MenuItem>
        <MenuItem eventKey={2.3}>Something else here</MenuItem>
        <MenuItem eventKey={2.3}>Separated link</MenuItem>
      </NavDropdown>


      <NavDropdown  style={{fontSize:'10px'}} eventKey={3} title="Consultancy" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        
        <MenuItem eventKey={3.4}>Separated link</MenuItem>
      </NavDropdown>

      <NavDropdown  style={{fontSize:'10px'}} eventKey={3} title="Training Services" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
         <MenuItem eventKey={3.4}>Separated link</MenuItem>
      </NavDropdown>


      <NavDropdown  style={{fontSize:'10px'}} eventKey={4} title="Management Systems Consultancy " id="basic-nav-dropdown">
        <MenuItem eventKey={4.1}>Action</MenuItem>
        <MenuItem eventKey={4.2}>Another action</MenuItem>
        <MenuItem eventKey={4.3}>Something else here</MenuItem>
        
        <MenuItem eventKey={4.4}>Separated link</MenuItem>
      </NavDropdown>


      <NavDropdown style={{fontSize:'10px'}} eventKey={5} title="Behavior Based safety" id="basic-nav-dropdown">
        <MenuItem eventKey={5.1}>Action</MenuItem>
        <MenuItem eventKey={5.2}>Another action</MenuItem>
        <MenuItem eventKey={5.3}>Something else here</MenuItem>
        
        <MenuItem eventKey={5.4}>Separated link</MenuItem>
      </NavDropdown>
  

    
    <NavDropdown style={{fontSize:'10px'}} eventKey={5} title="Publications" id="basic-nav-dropdown">
        <MenuItem eventKey={5.1}>Action</MenuItem>
        <MenuItem eventKey={5.2}>Another action</MenuItem>
        <MenuItem eventKey={5.3}>Something else here</MenuItem>
        
        <MenuItem eventKey={5.4}>Separated link</MenuItem>
      </NavDropdown>

      <NavDropdown style={{fontSize:'10px'}} eventKey={6} title="Produces" id="basic-nav-dropdown">
        <MenuItem eventKey={5.1}>Action</MenuItem>
        <MenuItem eventKey={5.2}>Another action</MenuItem>
        <MenuItem eventKey={5.3}>Something else here</MenuItem>
        
        <MenuItem eventKey={5.4}>Separated link</MenuItem>
      </NavDropdown>

      <NavDropdown style={{fontSize:'10px'}} eventKey={7} title="Softwares" id="basic-nav-dropdown">
        <MenuItem eventKey={5.1}>Action</MenuItem>
        <MenuItem eventKey={5.2}>Another action</MenuItem>
        <MenuItem eventKey={5.3}>Something else here</MenuItem>
        
        <MenuItem eventKey={5.4}>Separated link</MenuItem>
      </NavDropdown>
      <NavDropdown style={{fontSize:'10px'}} eventKey={7} title="Contact Us" id="basic-nav-dropdown">
        <MenuItem eventKey={5.1}>Action</MenuItem>
        <MenuItem eventKey={5.2}>Another action</MenuItem>
        <MenuItem eventKey={5.3}>Something else here</MenuItem>
        
        <MenuItem eventKey={5.4}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>

   </div>
    





</div>
);
}
}
export default Test;