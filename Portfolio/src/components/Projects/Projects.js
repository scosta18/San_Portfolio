import React from 'react';
import './Projects.css'; // Import CSS file

function Projects() {
  const projects = [
    {
      title: "Sentiment Analysis Web Application",
      description: "Built a full-stack web application using Flask, BeautifulSoup, and regex for sentiment analysis of online reviews. Analyzed sentiment through keyword matching and NLP techniques. Scraped review text from webpages via user-provided URLs.",
      stack: "Technology Stack: Python, Flask, HTML, CSS, JavaScript"
    },
    {
      title: "Student Management System",
      description: "Developed a full-stack Java application for efficient student course registration and transcript generation. Implemented data structures, algorithms, and MVC design patterns using Java for optimal performance. Generated dynamic transcripts based on student records, ensuring data accuracy and integrity.",
      stack: "Technology Stack: Java, HTML, CSS, JavaScript"
    },
    {
      title: "Morse Code Converter (Java)",
      description: "Designed and built a Morse Code Converter application using Object-Oriented Programming principles in Java. Implemented generic classes, binary trees, and Dijkstra's algorithm for efficient conversion between text and Morse code. Incorporated an intuitive graphical user interface (GUI) for enhanced user experience.",
      stack: "Technology Stack: Java"
    },
    {
      title: "Fitness Tracker (Kotlin)",
      description: "Developed a cross-platform health application in Kotlin to monitor workouts, track steps, and manage diets. Utilized sensor data, dynamic charts, and persistent storage for seamless user experience across devices. Integrated sensor data from accelerometer and pedometer, with 99% accuracy in step-counting.",
      stack: "Technology Stack: Kotlin"
    },
    {
      title: "File Organizer App (Python)",
      description: "Developed a file organization application using Python to automatically categorize and manage downloaded files based on their file types. Implemented file handling operations to read, move, and organize files in the designated directories. Utilized regular expressions and file extensions to identify and classify different types of files (e.g., documents, images, videos, music, etc.).",
      stack: "Technology Stack: Python"
    }
  ];

  return (
    <section className="container">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p><strong>{project.stack}</strong></p>
          <hr/>
        </div>
      ))}
    </section>
  );
}

export default Projects;
