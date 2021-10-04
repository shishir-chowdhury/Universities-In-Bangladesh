import React from 'react';
import './Header.css'
import { NavLink } from "react-router-dom";

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <nav className="header">
            <NavLink className="header-nav" activeStyle={activeStyle} to="/home">Home</NavLink>
            <NavLink className="header-nav" activeStyle={activeStyle} to="/Service">Service</NavLink>
            <NavLink className="header-nav" activeStyle={activeStyle} to="/about">About Us</NavLink>
            <NavLink className="header-nav" activeStyle={activeStyle} to="/contact">Contact Us</NavLink>
        </nav>
    );
};

export default Header;