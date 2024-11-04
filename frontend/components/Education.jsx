// src/components/Education.jsx
import React from 'react';
import schoolIcon1 from '../assets/IIIT_DWD.png';
import schoolIcon2 from '../assets/IIIT_DWD.png';
import schoolIcon3 from '../assets/IIIT_DWD.png';

const Education = () => {
  const sectionStyle = {
    height: '100vh',
    padding: '2rem',
    paddingTop: '4rem', // Added padding to ensure title visibility
    borderBottom: '1px solid #444',
    backgroundColor: '#111',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Align content to the left
    justifyContent: 'flex-start', // Start from the top
  };

  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: 'lightgreen',
    fontFamily: '"Fira Code", monospace',
    textAlign: 'left',
    marginBottom: '1rem',
  };

  const educationListStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Align items to the left
    justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
  };

  const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align icon and text to the left
    width: '90%', // Fit within screen width
    padding: '1rem',
  };

  const iconStyle = {
    width: '80px',
    height: '80px',
    marginRight: '1rem',
  };

  const textContainerStyle = {
    color: '#fff',
    fontFamily: '"Fira Code", monospace',
    lineHeight: '1.4',
  };

  const educationList = [
    {
      institution: 'Indian Institute of Information Technology Dharwad',
      degree: 'B.Tech in Data Science and Artificial Intelligence',
      year: '2024',
      gpa: '9.0/10',
      icon: schoolIcon1,
    },
    {
      institution: 'ABC Senior Secondary School',
      degree: 'High School Diploma',
      year: '2020',
      gpa: '94%',
      icon: schoolIcon2,
    },
    {
      institution: 'XYZ Junior School',
      degree: 'Secondary School Certificate',
      year: '2018',
      gpa: '92%',
      icon: schoolIcon3,
    },
  ];

  return (
    <div id="education" style={sectionStyle}>
      <h2 style={headingStyle}>Education</h2>
      <div style={educationListStyle}>
        {educationList.map((edu, index) => (
          <div key={index} style={itemStyle}>
            <img src={edu.icon} alt="School Icon" style={iconStyle} />
            <div style={textContainerStyle}>
              <strong>{edu.institution} - {edu.degree}</strong> <br />
              <span style={{ color: 'lightgreen' }}>Graduated:</span> <span>{edu.year}</span><br />
              <span style={{ color: 'lightgreen' }}>GPA:</span> <span>{edu.gpa}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
