import React, { useState } from 'react'
import '../components/Navbar.css'
import {Link} from "react-router-dom"

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
  return (
    <div>
      <div className='box'></div>
      <div className='box1'></div>
      <div className='box2'></div>
      <div className='box3'></div>
      <div className='box4'></div>
      <nav className='navbar'>
        <h3 className='logo'>SARTHAK</h3>

        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={()=>setIsMobile(false)}>

            <Link to="/" className="home">
                <li>HOME</li>
            </Link>

            <Link to="/about" className="about">
                <li>ABOUT</li>
            </Link>

            <Link to="/contact" className="contact">
                <li>CONTACT</li>
            </Link>

            <Link to="/skills" className="skills">
                <li>SKILLS</li>
            </Link>

            
        </ul>
        <button className='mobile-menu-icon' onClick={()=> setIsMobile(!isMobile)}>
            {isMobile ? (<i className='fas fa-times'></i>):(<i className='fas fa-bars'></i>)}
        </button>
      </nav>
    </div>
  )
}

export default Navbar
