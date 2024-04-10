import React from 'react';
import './Introduction.css'; // Import CSS file for styling
import profPic from '../Introduction/intro.jpg';

function Introduction() {
  return (
    <div className="introduction">
      <div className="profile">
        <img
          src={profPic}
          alt="Profile Picture"
          className="profile-picture"
        />
        <div className="profile-info">
          <h2 style={{ color: 'white', marginBottom: '5px' }}>Sandro Costa</h2>
          <p style={{ color: 'white' }}>
            Cell: +1(301) 383-4167 
            <br/>
            Email: sandroblaise19@gmail.com
            <br />
            LinkedIn: <a href="linkedin.com/in/sandro-costa" style={{ color: 'white' }}>linkedin</a>
            <br/>
            Github: <a href="https://github.com/scosta18?tab=repositories" style={{ color: 'white' }}>github</a>
          </p>
        </div>
      </div>
      <hr />
      <div className="bio">
        <h3 style={{ color: 'white', marginBottom: '10px' }}>About Me</h3>
        <p style={{ color: 'white' }}>
          I am a driven Computer Science graduate passionate about developing
          cutting-edge software solutions. My expertise includes leveraging data
          structures, algorithms, and OOP to tackle complex problems. With a
          strong full-stack background, I excel in Java, Python, JavaScript,
          React.js, and other emerging technologies. I am currently seeking
          challenging opportunities to contribute to impactful projects and
          accelerate my professional growth.
        </p>
      </div>
      <hr />
    </div>
  );
}

export default Introduction;
