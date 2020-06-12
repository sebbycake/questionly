import React, { useState } from 'react';
import NavItem from "./NavItem";

function Menu() {
    
    const [toggle, setToggle] = useState(false)

    const handleNavBar = () => {
        setToggle(!toggle)
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
               <NavItem path='/' handler={handleNavBar} page='Home' />
               <NavItem path='/about' handler={handleNavBar} page='About Us' />
               <NavItem path='/contact' handler={handleNavBar} page='Contact Us' />
            </ul>
        </nav>

    )
}

export default Menu