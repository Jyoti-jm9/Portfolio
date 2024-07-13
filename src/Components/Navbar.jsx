import React from 'react'
import './Navbar.css';
const Navbar = () => {
  return (
    <div className=' flex justify-between items-center m-5 ml-20'>
        <div >Portfolio</div>
        <div className='p-4 m-2'>
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