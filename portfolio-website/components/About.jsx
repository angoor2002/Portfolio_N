// src/components/About.jsx
import React from 'react';
import profilePic from '../assets/profile_pic.jpg'; // Adjust the path as needed

const About = () => {
  const sectionStyle = {
    height: '100vh',
    padding: '2rem',
    borderBottom: '1px solid #444',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Adjust spacing between text and image
    backgroundColor: '#111', // Ensure background color for better visibility
    position: 'relative', // Make the section a positioning context
  };

  const textStyle = {
    flex: 0.7, // Occupy 70% of the page
    paddingRight: '2rem', // Increase padding to create space from the image
    fontFamily: '"Fira Code", monospace',
    color: '#fff',
    // Remove maxWidth or set it to a larger percentage
    // maxWidth: '50%', // Optional: Uncomment if you want to limit the width slightly
  };

  const profilePicStyle = {
    width: '40%', // Larger portion of the page
    height: 'auto',
    borderRadius: '10px', // Rectangular shape
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const profilePicHoverStyle = {
    transform: 'scale(1.1)', // Slight zoom effect
    boxShadow: '0 4px 20px rgba(0, 255, 0, 0.6)', // Green glowing shadow
  };

  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: 'lightgreen', // Light green for "About"
    fontFamily: '"Fira Code", monospace', // Classic coder font
  };

  const highlightedStyle = {
    color: 'lightgreen', // Light green for highlighted words
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div id="about" style={sectionStyle}>
      <div style={textStyle}>
        <h2 style={headingStyle}>About me</h2>
        <p>
          Hi, I'm <span style={highlightedStyle}>Nupur</span>, a final-year student at the{' '}
          <span style={highlightedStyle}>Indian Institute of Information Technology Dharwad</span>. 
          I'm pursuing a B.Tech in Data Science and Artificial Intelligence, with a primary focus on{' '}
          <span style={highlightedStyle}>Machine Learning</span>, <span style={highlightedStyle}>Deep Learning</span>, 
          and <span style={highlightedStyle}>Generative AI</span>. I’m actively seeking opportunities in these fields, so 
          feel free to reach out if you know of any roles that might be a good fit.
        </p>
      </div>
      <img
        src={profilePic}
        alt="Profile"
        style={isHovered ? { ...profilePicStyle, ...profilePicHoverStyle } : profilePicStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>
  );
};

export default About;
