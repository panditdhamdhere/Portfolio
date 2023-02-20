import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Social from './components/Social';
import Techstack from './components/Techstack';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Techstack />
      <Contact />
     
      <Social />
    </>
  );
}

export default App;
