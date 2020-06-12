import React from 'react';
import { Link } from 'react-router-dom';

// Navigation Menu Item/Link
function NavItem(props) {
    return (
        <li>
            <Link to={props.path} onClick={props.handler}>{props.page}</Link>
        </li>
    )
}

export default NavItem