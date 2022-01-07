import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './components/Navbar';
 
const App = () => {
  return (
    <div className="App">
      <ToastContainer />
        <Navbar />
      <h1>Welcome to Contact Book</h1>
    </div>
  );
}

export default App;
