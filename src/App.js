import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textform';
import { useState } from 'react';

let name = "sambhav";

function App() {
  const [darkMode ,setDarkMode] = useState(false);

  const toggle = ()=>{
    if(darkMode)
    {
      setDarkMode(false);
      document.body.style.backgroundColor = "white";
    }
    else{
      setDarkMode(true);
      document.body.style.backgroundColor = "#202124";
      
    }
  }

  return (
    <>
      <Navbar title="textUtils" mode = {darkMode} toggle={toggle}/>
      <TextForm mode = {darkMode}/>
    </>
  );
}

export default App;
