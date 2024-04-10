// Header.js

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="container">
        <h1>Sandro Costa</h1>
        <p>Driven Computer Science Graduate</p>
        <ul>
          <li>Cell: +1(301) 383-4167</li>
          <li>Email: sandroblaise19@gmail.com</li>
          <li><a href="https://www.linkedin.com/in/sandro-costa-000b301a2/">LinkedIn</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
