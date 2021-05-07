import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Skills from './components/Skills';
import { GlobalStyle } from './App.style';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  //!
  // TODOs: custom mouse, mobile responsive, button animation, nav animation, about section animation, contact animation, link resume

  return (
      <div className="App">
        <GlobalStyle />
        <Nav />
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </div>
  );
}

export default App;
