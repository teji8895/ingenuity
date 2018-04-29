import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import '../node_modules/mdbreact/dist/css/mdb.css';
import '../node_modules/mdbreact/dist/mdbreact.js';
import NavbarFeatures from './Header/Navbar1'



import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<NavbarFeatures/>, document.getElementById('root'));
registerServiceWorker();
