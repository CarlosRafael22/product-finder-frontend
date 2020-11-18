import React from "react";
import { useSelector } from 'react-redux';
import "./Navbar.css";

export default (props) => {
    const {user, loggedIn} = useSelector(state => state.auth);
    console.log('NO HEADER: ', user, loggedIn)

    return (
        <nav className="navbar">
            <h1>Magazon</h1>
            <ul className="navbar-items">
                <li className="nav-links">Search</li>
                <li className="nav-links">Products</li>
                <li className="nav-links">{loggedIn ? user.name : 'Log in'}</li>
            </ul>
        </nav>
    )
}