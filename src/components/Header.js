import React from "react";
import Menu from './Menu';

function Header() {
    return (

        <div>
            <Menu />
            <div className="header typewriter">
                <h1>Questionly</h1>
            </div>

        </div>
    )
}

export default Header