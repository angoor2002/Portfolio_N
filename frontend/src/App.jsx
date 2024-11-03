// src/App.jsx
// import React from 'react';
import Hi from '../components/Hi'
import Navbar from '../components/Navbar';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Contact from '../components/Contact';

function App() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', margin: 0, fontFamily: 'Arial, sans-serif' }}>
      <Hi/>
      <Navbar />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Resume />
      <Contact/>
    </div>
  );
}

export default App;