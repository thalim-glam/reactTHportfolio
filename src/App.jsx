import { useState } from 'react';
import reactLogo from './assets/favicon.ico';
import './App.css';
import SideNav from './components/SideNav';
import Main from './components/Main';
import Work from './components/Work';

function App() {
  return (
    < div >
    <SideNav />
    <Main />
    <Work />
    </div >
  )
}

export default App;
