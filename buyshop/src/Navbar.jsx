/*eslint-disable*/
import React, {useState}from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar =()=>{
    // const [menuOpen,SetmenuOpen]= useState(flase)
    return(
        <nav className="Nav Nav-bar">
<li><NavLink to="/">Logo</NavLink></li>
<div className="menu" onClick={()=>{
    SetmenuOpen(!menuOpen);
}}>
    <span></span>
    <span></span>
    <span></span>
</div>
{/* <ul className={menuOpne ? "menu" : ""}></ul> */}
<ul >
    <li>
        <NavLink to="/Services">Services</NavLink>
    </li>
</ul>
        </nav>
    );
}

export default Navbar