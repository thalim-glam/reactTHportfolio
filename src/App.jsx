import { useState } from 'react';
import './App.css';
import SideNav from './components/SideNav';
import Main from './components/Main';
import Work from './components/Work';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    < div >
      <SideNav />
      <Main />
      <Work />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div >
  )
}

export default App;
