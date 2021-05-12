import React, { useEffect } from 'react';
import Nav from './components/Nav';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Skills from './components/Skills';
import { GlobalStyle } from './App.style';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cursor from './components/Cursor';

function App() {
  useEffect(() =>{
    AOS.init({duration: 700});
  }, []);

  return (
      <div className="App">
        <Cursor />
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
