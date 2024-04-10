import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Root/root'; // Import Header component

function App() {
  return (
    <div className='appbk'>
      <Router>
      <div>
        <Header/>
      </div>
    </Router>
    </div>

  );
}

export default App;
