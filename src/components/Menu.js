import React from 'react';
import {Link} from 'react-router-dom';

function Menu() {

    const styles = {
        listStyleType: "none",
        textDecoration: "none",
        color: "#fff",
        fontWeight: 550,
        textTransform: "uppercase",
        margin: "1.5rem",
        transition: ".3s",
        fontSize: "2.5rem",
        display: "block"
    }
    
    return (
        <div className="menu-wrap">
            <input type="checkbox" className="toggler" />
            <div className="hamburger">
                <div></div>
            </div>
            <div className="menu">
                <div>
                    <div>
                        <ul>
                            <Link style={styles} to="/">
                            <li>Home</li>
                            </Link>
                            <Link style={styles} to="/about" >
                            <li>About Us</li>
                            </Link>
                            <Link style={styles} to="/contact">
                            <li>Contact Us</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Menu