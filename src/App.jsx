import React from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Skill from './Components/Skill';
import Project from './Components/Project';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
function App() {


  return (
    
     <div >
          <Navbar />
          <Home />
          <Skill />
          <Project />
          <Contact />
          <Footer />
     </div>
    
  )
}

export default App
