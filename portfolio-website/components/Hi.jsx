// src/components/Hi.jsx
// import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Hi = () => {
  const sectionStyle = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    color: '#fff',
    fontSize: '2rem',
    fontFamily: 'monospace',
    textAlign: 'center',
  };

  return (
    <div style={sectionStyle} id="hi">
      <h1>Hi. My Name is Nupur</h1>
      <h2>
        I am {' '}
        <span style={{ color: 'lightgreen' }}>
          <Typewriter
            words={['an ML Junkie', 'an App Developer', 'a Data Science Nerd', 'a DL Junkie']}
            loop={true} // Infinite loop
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h2>
    </div>
  );
};

export default Hi;
