/*eslint-disable*/
import React, {useState}from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar =()=>{
    const [menuOpen,SetmenuOpen]= useState(false)
    return(
        <nav className="nav nav-bar">
<li><NavLink to="/">Logo</NavLink></li>
<div className="menu" onClick={()=>{
    SetmenuOpen(!menuOpen);
}}>
    <span></span>
    <span></span>
    <span></span>
</div>
<ul className={menuOpen ? "menu" : ""}>

    <li>
        <NavLink to="/Services">Services</NavLink>
    </li>
    <li>
        <NavLink to="/About">About</NavLink>
    </li>
    <li>
        <NavLink to="/Contact">Contact</NavLink>
    </li>
</ul>
        </nav>
    );
}

export default Navbar