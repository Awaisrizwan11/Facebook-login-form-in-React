import React from 'react';
import './App.css';
import Nav from './nav'
import Body from './body'
import Dashboard from './Dashboard'
import {BrowserRouter , Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
    <BrowserRouter>

    <Nav/>
<Route path='/' component={Body} exact/>
<Route path='/dashboard' component={Dashboard} exact/>

     
      </BrowserRouter>
    </div>
  );
}

export default App;
