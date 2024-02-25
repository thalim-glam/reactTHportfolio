import { useState } from 'react';
import reactLogo from './assets/favicon.ico';
import './App.css';
import SideNav from './components/SideNav';
import Main from './components/Main';
import Work from './components/Work';
// import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    < div >
      <SideNav />
      <Main />
      <Work />
      {/* <Projects /> */}
      <Skills />
      <Contact />
    </div >
  )
}

export default App;
