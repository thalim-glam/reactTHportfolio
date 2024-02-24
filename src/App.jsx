import { useState } from 'react';
import reactLogo from './assets/favicon.ico';
import './App.css';
import SideNav from './components/SideNav';
import Main from './components/Main';
import Work from './components/Work';
import Projects from './components/Projects';

function App() {
  return (
    < div >
      <SideNav />
      <Main />
      <Work />
      <Projects />
    </div >
  )
}

export default App;
