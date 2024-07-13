import React from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Skill from './Components/Skill';
import Projects from './Components/Projects';
function App() {


  return (
    
     <div >
          <Navbar />
          <Home />
          <Skill />
          <Projects />
     </div>
    
  )
}

export default App
