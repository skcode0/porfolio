import Nav from './components/Nav';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Skills from './components/Skills';
import { GlobalStyle } from './App.style';

function App() {
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
