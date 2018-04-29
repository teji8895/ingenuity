import React, { Component } from 'react';

import  Test from './Header/NavDrawer';
import Carouselold from './Middle/Carouselold';
import './App.css';
import {HashRouter,Switch,Route} from 'react-router-dom';
import FooterPage from './Footer/FooterPage';



export class NotFoundPage extends Component{

  render(){
    return(

      <div><h1>404!</h1></div>
    );
  }
}

export class Company extends Component{

  render(){
    return(

      <div><h1>This is Eqms</h1></div>
    );
  }
}




class App extends Component {

  render() {
    return (
      <div >
      <div className="header">
      <Test/>
      </div>
      
      <div className="Middle">
         <HashRouter>
           <Switch>
             <Route path="/" exact component={Carouselold}  />
             <Route path="/Company" exact component={Company}  />
            
             <Route component={NotFoundPage}/>

            </Switch>
          </HashRouter>       

            
            
            < FooterPage className="Footer"/>

            </div>



          
           
      

       

      

     
     
      
             
        
      </div>
    );
  }
}

export default App;


