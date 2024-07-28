import React from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Skill from './Components/Skill';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
function App() {


  return (
    
     <div >
          <Navbar />
          <Home />
          <Skill />
          <Projects />
          <Footer />
     </div>
    
  )
}

export default App
