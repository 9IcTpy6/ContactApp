import React from 'react';
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import './App.css';
import Navbar from './components/Navbar';
 
const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
          <Route exact path ="/"><h1>Welcome to Contact Book</h1></Route>
          <Route path ="/add"><h1>i am add component</h1></Route>
          <Route  path ="/edit/:id"><h1>i am edit component</h1> </Route>
      </Switch>
      
    </div>
  );
}

export default App;
