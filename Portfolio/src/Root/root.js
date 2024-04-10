// root.js

import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Activities from '../components/Activities/Activities';
import Education from '../components/Education/Education';
import Header from '../components/Header/Header';
import Introduction from '../components/Introduction/Introduction';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Home from '../pages/Home';
import Pages from '../pages/About';
import './root.css'; // Import CSS file for styling


function Root() {
  return (
    <div className="container">
      <div className="nav-links">
        <Link to="home">Home</Link>
        <Link to="introduction">Introduction</Link>
        <Link to="activities">Activities</Link>
        <Link to="education">Education</Link>
        <Link to="projects">Projects</Link>
        <Link to="skills">Skills</Link>
      </div>
      <hr></hr>

      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="introduction" element={<Introduction />} />
        <Route path="activities" element={<Activities />} />
        <Route path="education" element={<Education />} />
        <Route path="header" element={<Header />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default Root;
