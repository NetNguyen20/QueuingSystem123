import React from 'react';
import './App.css';
import Nvabar from "./component/nvabar"
import Login from "./component/login"

import { Routes, BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';

function App() {
  

  return (
    <div className="App" >
                      
      <BrowserRouter>
        <Routes>  
          <Route path='/Page-login' element ={<Login/>}/>
          <Route path='/Page-home' element ={<Nvabar/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;