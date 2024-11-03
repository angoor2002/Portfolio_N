// src/components/Resume.jsx
import React from 'react';
import resumePDF from '../assets/Latest_Resume.pdf'; // Replace with your actual PDF path

const Resume = () => {
  const sectionStyle = {
    height: '100vh',
    padding: '2rem',
    paddingTop: '2rem', // Ensure title visibility
    borderBottom: '1px solid #444',
    backgroundColor: '#111',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center-align content horizontally
    justifyContent: 'flex-start', // Start from the top
  };

  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: 'lightgreen',
    fontFamily: '"Fira Code", monospace',
    marginBottom: '1rem',
  };

  const pdfContainerStyle = {
    width: '80%',
    height: 'calc(100vh - 150px)', // Leave space for heading and padding
    overflow: 'hidden', // Hide overflow to create a nice scrollable effect
  };

  const pdfStyle = {
    width: '100%',
    height: '100%',
    border: 'none', // Remove default border from iframe
  };

  return (
    <div id="resume" style={sectionStyle}>
      <h2 style={headingStyle}>Resume</h2>
      <div style={pdfContainerStyle}>
        <iframe
          src={resumePDF}
          style={pdfStyle}
          title="Resume PDF"
        />
      </div>
    </div>
  );
};

export default Resume;
