import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    
    const [toggle, setToggle] = useState(false)

    const handleNavBar = () => {
        toggle ? setToggle(false) : setToggle(true)
        const navBar = document.querySelector('.nav-links');
        navBar.classList.toggle('nav-active');
    }

    let isToggle = toggle ? 'toggle' : ''

    return (

        <nav>
            <div className={`burger + ${isToggle}`} onClick={handleNavBar}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

            <ul className="nav-links">
               <li>
                   <Link to='/' onClick={handleNavBar}>Home</Link>
               </li>
               <li>
                   <Link to='/about' onClick={handleNavBar}>About Us</Link>
               </li>
               <li>
                   <Link to='/contact' onClick={handleNavBar}>Contact Us</Link>
               </li>
            </ul>
        </nav>

    )
}

export default Menu