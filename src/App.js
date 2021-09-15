import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState('light'); //whether darkmode is enabled or not
  
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#042743'
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
    {/* Navbar */}
    <Navbar title="TextUtils" aboutTab="About Text Utils" mode={mode} toggleMode={toggleMode} />

    {/* TextArea */}
    <div className="container my-3">
    <TextForm heading="Enter your text here!" mode={mode} />
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
