import React from "react";
import {Link} from 'react-router-dom';
import errorLogo from "../util/error.png";

const styles = {
    fontSize: "20px",
    borderRadius: "40%",
    textDecoration: "none",
}

function NotFound() {
    return (
        <div className="not-found-page">
            <img src={errorLogo} alt="404 Error" />
            <h1>Oops! We can't find that page.</h1>
            <Link style={styles} to="/">BACK TO HOME</Link>
        </div>
    )
}

export default NotFound