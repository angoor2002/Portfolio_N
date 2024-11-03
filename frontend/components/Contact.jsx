// src/components/Contact.jsx
import React, { useState } from 'react';
// You can also import EmailJS if you decide to use it for sending emails

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log('Message submitted:', message);
    alert('Message submitted!'); // Temporary feedback
    setMessage(''); // Clear the text field
  };

  const sectionStyle = {
    height: '100vh',
    padding: '2rem',
    borderBottom: '1px solid #444',
    backgroundColor: '#111',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: 'lightgreen',
    fontFamily: '"Fira Code", monospace',
    marginBottom: '1rem',
  };

  const infoStyle = {
    marginBottom: '1rem',
    textAlign: 'center',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '500px',
  };

  const textareaStyle = {
    width: '100%',
    height: '100px',
    padding: '0.5rem',
    borderRadius: '5px',
    border: '1px solid #444',
    marginBottom: '1rem',
    backgroundColor: '#222',
    color: '#fff',
    fontFamily: '"Fira Code", monospace',
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: 'lightgreen',
    color: '#111',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  return (
    <div id="contact" style={sectionStyle}>
      <h2 style={headingStyle}>Contact Me</h2>
      <div style={infoStyle}>
        <p>Email: <a href="mailto:nupursangwai@gmail.com" style={{ color: 'lightgreen' }}>nupursangwai@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/nupur-sangwai-232818225/" target="_blank" rel="noopener noreferrer" style={{ color: 'lightgreen' }}>Nupur_Sangwai_LinkedIn</a></p>
      </div>
      <form onSubmit={handleSubmit} style={formStyle}>
        <textarea
          placeholder="Your message..."
          value={message}
          onChange={handleChange}
          style={textareaStyle}
        />
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
