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
import PuffLoader from "react-spinners/PuffLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* first border */
  .css-shq65p{
    border: solid #ff1842 thick;
  }

  /* second border */
  .css-8r04rc{
    border: solid #3AF8D6 thick;
  }
`

function App() {
  //!
  // TODOs: custom mouse, mobile responsive, button animation, nav animation, about section animation, contact animation, link resume
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>{
    setIsLoading(false);
    AOS.init({duration: 700});
  }, [])

  return (
    <>
    <GlobalStyle />
    {
      isLoading ? 
      <>
        <PuffLoader loading={isLoading} size={200} css={override}/>
        <p style={{position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)"}}>Loading...</p>
      </>:
      <div className="App">
        <Nav />
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </div>
    }
    </>
  );
}

export default App;
