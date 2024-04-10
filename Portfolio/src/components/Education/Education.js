import React from 'react';
import './Education.css'; // Import CSS file for styling

function Education() {
  return (
    <section id="education" className="container">
      <h2>Education</h2>

      {/* University of Maryland Section */}
      <div >
        <h3 className='education-section umd'>University of Maryland, College Park, MD</h3>
        <p style={{ color: '#fff' }}>Bachelor of Science, Computer Science</p>
        <p style={{ color: '#fff' }}>GPA: 3.40</p>
        <div className="courses-list">
          <h4>Relevant Courses Completed:</h4>
          <ul>
            <li>Advanced Data Structures and Algorithms</li>
            <li>Object-Oriented Programming & Web Programming</li>
            <li>Calculus</li>
            <li>Mobile App Development</li>
            <li>Computer and Network Security</li>
            <li>Machine Learning</li>
            <li>Human-Computer Interaction</li>
            {/* Add more relevant courses as needed */}
          </ul>
        </div>
      </div>

      <hr />

      {/* Montgomery College Section */}
      <div >
        <h3 className='education-section mont'>Montgomery College, Rockville, MD</h3>
        <p style={{ color: '#fff' }}>Associates of Arts, Computer Science</p>
        <p style={{ color: '#fff' }}>GPA: 3.50</p>
        <div className="courses-list">
          <h4 >Relevant Courses Completed:</h4>
          <ul>
            <li>Introduction to Computer Systems</li>
            <li>Discrete Math</li>
            <li>Calculus</li>
            <li>Linear Algebra</li>
            {/* Add more relevant courses as needed */}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education;
