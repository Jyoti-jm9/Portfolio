import React from 'react'

//import './Navbar.css';
const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Brand */}
        <a href="#" className="text-xl font-bold">PORTFOLIO</a>
        
        {/* Hamburger Button for Mobile View */}
        <button
          className="text-white text-3xl lg:hidden focus:outline-none"
          aria-label="Toggle Menu"
          onClick={() => document.getElementById('mobileMenu').classList.toggle('hidden')}
        >
          <i className="fa-solid fa-bars-staggered"></i>
        </button>

        {/* Mobile Offcanvas Menu */}
        <div
          id="mobileMenu"
          className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white transform -translate-x-full transition-transform duration-300 lg:hidden"
        >
          <div className="flex justify-between p-4">
            <h5 className="text-lg font-bold">Menu</h5>
            <button
              onClick={() => document.getElementById('mobileMenu').classList.add('hidden')}
              className="text-white text-2xl focus:outline-none"
            >
              &times;
            </button>
          </div>
          <ul className="flex flex-col p-4 gap-4">
            <li><a href="#Home" className="hover:text-gray-300">HOME</a></li>
            <li><a href="#Skills" className="hover:text-gray-300">SKILLS</a></li>
            <li><a href="#Projects" className="hover:text-gray-300">PROJECTS</a></li>
            <li><a href="#Contacts" className="hover:text-gray-300">CONTACT</a></li>
            <li><a href="#" className="bg-white text-gray-900 px-4 py-2 rounded-full">HIRE ME</a></li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 items-center">
          <a href="#" className="hover:text-gray-400">HOME</a>
          <a href="#Skills" className="hover:text-gray-400">SKILLS</a>
          <a href="#Projects" className="hover:text-gray-400">PROJECTS</a>
          <a href="#Contacts" className="hover:text-gray-400">CONTACT</a>
          <a href="#" className="bg-white text-gray-900 px-4 py-2 rounded-full">HIRE ME</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar