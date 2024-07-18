import React from 'react'

import './Navbar.css';
const Navbar = () => {
  return (
    <div className='w-full flex justify-between flex-row m-1 '>
        <div className='w-3/12 ml-20'>Portfolio</div>
        <div className= 'w-9/12  flex justify-evenly'>
            <a className='nav_items' href="">Home</a>
            <a className='nav_items' href="">Skills</a>
            <a className='nav_items' href="">Projects</a>
            <a className='nav_items' href="">Education</a>
            <a className='nav_items' href="">Contacts</a>
        </div>
    </div>
  )
}

export default Navbar