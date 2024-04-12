import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Root/root'; // Import Header component
import SpinningZerosOnes from './spinningZO/spinning';
import Home from './pages/Home'

function App() {
  return (
    <div className='appbk'>
      <Router>
      <div>
        <Header/>
        <SpinningZerosOnes/>      
        </div>
    </Router>
    </div>

  );
}

export default App;
