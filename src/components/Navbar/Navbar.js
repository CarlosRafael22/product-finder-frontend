import React from "react";
import "./Navbar.css";

export default (props) => {

    return (
        <nav className="navbar">
            <h1>Magazon</h1>
            <ul className="navbar-items">
                <li className="nav-links">Search</li>
                <li className="nav-links">Products</li>
                <li className="nav-links">Profile</li>
            </ul>
        </nav>
    )
}