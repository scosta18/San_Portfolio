import React from 'react';

function Skills() {
  return (
    <section id="skills" className="container">
      <h2>Technical Skills</h2>
      {/* Programming Languages */}
      <div>
        <h3>Programming Languages</h3>
        <ul>
          <li>Java</li>
          <li>Python</li>
          <li>R</li>
          <li>JavaScript</li>
          <li>C</li>
          <li>C#</li>
          <li>C++</li>
          <li>Ruby</li>
          <li>Rust</li>
          <li>Kotlin</li>
          <li>OCaml</li>
          <li>PHP</li>
        </ul>
      </div>

      {/* Web Technologies */}
      <div>
        <h3>Web Technologies</h3>
        <ul>
          <li>HTML/CSS</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Flask</li>
        </ul>
      </div>

      {/* Database */}
      <div>
        <h3>Database</h3>
        <ul>
          <li>MySQL | SQL | NoSQL</li>
          <li>MongoDB</li>
          {/* Add more database skills here */}
        </ul>
      </div>

      {/* Tools and Platforms */}
      <div>
        <h3>Tools and Platforms</h3>
        <ul>
          <li>Git</li>
          <li>GitHub</li>
          <li>Linux</li>
          <li>GCP (Google Cloud Platform)</li>
          {/* Add more tools and platforms here */}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
