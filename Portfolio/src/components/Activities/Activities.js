import React from 'react';

function Activities() {
  return (
    <section id="activities" className="container">
      <h2 className="activities-heading">Activities and Leadership Experience</h2>
      
      <div className="activity">
        <h3 style={{ color: 'white' }}>Active Member, UMD’s Cybersecurity Club (UMDCSEC)</h3>
        <h5 style={{ color: 'white' }}>From November 2023 to current</h5>
        {/* Convert points to a list */}
        <ul style={{ color: 'white' }}>
          <li>Participate in weekly meetings, capture-the-flag competitions, and hands-on cybersecurity projects.</li>
          <li>Attend industry speaker events to stay updated on emerging cybersecurity trends and best practices.</li>
          <li>Collaborate with team members to solve complex security challenges, honing problem-solving abilities.</li>
        </ul>
      </div>

      <div className="activity">
        <h3 style={{ color: 'white' }}>Student Ambassador, A. James Clark School of Engineering</h3>
        <h5 style={{ color: 'white' }}>From January 2024 to November 2023</h5>
        <ul style={{ color: 'white' }}>
          <li>Represent the engineering school by delivering campus tours and presentations to prospective students.</li>
          <li>Developed public speaking, leadership, and event management skills.</li>
        </ul>
      </div>
    </section>
  );
}

export default Activities;
