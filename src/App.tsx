import React from 'react';
import './App.css';
import Nvabar from "./component/nvabar"
import Login from "./component/login"

import { Routes, BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import TrangChu from './component/Trangchu';
import Thietbi from './component/Thietbi';

function App() {
  

  return (
    <div className="App" >
                      
      <BrowserRouter>
        <Routes>  
          <Route path='/Page-login' element ={<Login/>}/>
          <Route path='/Page-home' element ={<TrangChu/>}/>
          <Route path='/Page-dashboard' element ={<Dashboard/>}/>
          <Route path='/Page-thietbi' element ={<Thietbi/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;