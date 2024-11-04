// src/components/WorkExperience.jsx
// import React from 'react';
import companyIcon1 from '../assets/drdo_logo.png'; // Replace with your actual image paths
import companyIcon2 from '../assets/IIT_Guwahati_Logo.png';
import companyIcon3 from '../assets/IIIT_DWD.png';

const WorkExperience = () => {
  const sectionStyle = {
    height: '100vh',
    padding: '2rem',
    paddingTop: '4rem', // Ensure title visibility
    borderBottom: '1px solid #444',
    backgroundColor: '#111',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center-align content horizontally
    justifyContent: 'flex-start', // Start from the top
    overflowY: 'auto', // Enable vertical scrolling
  };

  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: 'lightgreen',
    fontFamily: '"Fira Code", monospace',
    textAlign: 'left',
    marginBottom: '1rem',
  };

  const experienceListStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center items horizontally
    justifyContent: 'flex-start',
    width: '100%',
    maxHeight: 'calc(100vh - 80px)', // Ensure enough height for scrolling
    overflowY: 'auto', // Enable vertical scrolling within this container
  };

  const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align icon and text to the left
    width: '90%', // Fit within screen width
    padding: '1rem',
    margin: '0.5rem 0',
    border: '1px solid #444',
    borderRadius: '8px',
    backgroundColor: '#222', // Dark background for the card
  };

  const iconStyle = {
    width: '60px', // Slightly smaller icon size
    height: '60px',
    marginRight: '1rem',
  };

  const textContainerStyle = {
    color: '#fff',
    fontFamily: '"Fira Code", monospace',
    lineHeight: '1.4',
  };

  const experienceList = [
    {
      company: 'DRDO',
      position: 'Machine Learning Intern',
      year: '2024',
      description: 'TBD',
      icon: companyIcon1,
    },
    {
      company: 'Indian Institute of Technology Guwahati',
      position: 'Research Intern',
      year: '2023',
      description: 'TBD',
      icon: companyIcon2,
    },
    {
      company: 'Vocab.ai',
      position: 'Computer Vision Intern',
      year: '2023',
      description: 'Tackled computer vision challenges using deep learning methodologies like CNNs and YOLOv8 for real-time object detection.',
      icon: companyIcon3,
    },
  ];

  return (
    <div id="experience" style={sectionStyle}>
      <h2 style={headingStyle}>Work Experience</h2>
      <div style={experienceListStyle}>
        {experienceList.map((exp, index) => (
          <div key={index} style={itemStyle}>
            <img src={exp.icon} alt={`${exp.company} Logo`} style={iconStyle} />
            <div style={textContainerStyle}>
              <strong>{exp.company} - {exp.position} </strong><br />
              <span style={{ color: 'lightgreen' }}>Year: {exp.year} </span><br />
              <span style={{ color: 'lightgreen' }}>Description:</span> <span>{exp.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
