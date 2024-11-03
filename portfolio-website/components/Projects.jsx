// src/components/Projects.jsx
import React from 'react';

const Projects = () => {
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

  const projectListStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center items horizontally
    justifyContent: 'flex-start',
    width: '100%',
    maxHeight: 'calc(100vh - 120px)', // Calculate height while leaving space for padding and heading
    overflowY: 'auto', // Enable vertical scrolling within this container
    padding: '1rem', // Add some padding around the project list
  };

  const itemStyle = {
    display: 'flex',
    flexDirection: 'column', // Stack title and description
    justifyContent: 'flex-start', // Start from the top
    width: '90%', // Fit within screen width
    padding: '1rem',
    margin: '0.5rem 0',
    border: '1px solid #444',
    borderRadius: '8px',
    backgroundColor: '#222', // Dark background for the card
  };

  const titleStyle = {
    fontWeight: 'bold',
    color: 'lightgreen',
    marginBottom: '0.5rem',
  };

  const descriptionStyle = {
    color: '#fff',
    fontFamily: '"Fira Code", monospace',
    lineHeight: '1.4',
  };

  // Sample project data
  const projectList = [
    {
      title: 'Project One',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec pharetra leo.',
    },
    {
      title: 'Project Two',
      description: 'Donec a ex vel orci varius dictum. Integer nec dui vehicula, auctor libero nec, dictum lorem.',
    },
    {
      title: 'Project Three',
      description: 'Curabitur volutpat nulla a neque bibendum, vel cursus elit hendrerit.',
    },
    // Add more projects for testing scrolling
    {
      title: 'Project Four',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    },
    {
      title: 'Project Five',
      description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    },
    {
      title: 'Project Six',
      description: 'Et harum quidem rerum facilis est et expedita distinctio.',
    },
    {
      title: 'Project Seven',
      description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.',
    },
    {
      title: 'Project Eight',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ];

  return (
    <div id="projects" style={sectionStyle}>
      <h2 style={headingStyle}>Projects</h2>
      <div style={projectListStyle}>
        {projectList.map((project, index) => (
          <div key={index} style={itemStyle}>
            <h3 style={titleStyle}>{project.title}</h3>
            <p style={descriptionStyle}>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
