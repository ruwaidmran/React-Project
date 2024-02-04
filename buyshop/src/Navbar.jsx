/*eslint-disable*/
import React, {useState}from "react";
import { Link,NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar =()=>{
const [menuOpen,SetmenuOpen]= useState(false)
return(


<nav className="nav">

    {/* <li>
    <img src={Logo} alt="logo" />
    <Logo fillColor="red" /> 
        <Logo fillColor="red" />
    </li> */}
    <li>
            <Link to="/"> Logo</Link>
        </li>
    <div className="menu" onClick={()=>{
        SetmenuOpen(!menuOpen);
        }}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <ul className={menuOpen ? "menu" : "" }>
        <li>
            <NavLink to="/Services">Services</NavLink>
        </li>
        <li>
            <NavLink to="/About">About</NavLink>
        </li>
        <li>
            <NavLink to="/Profile">Profile</NavLink>
        </li>
        <li>
            <NavLink to="/Contact">Contact</NavLink>
        </li>
    </ul>

</nav>


);
}

export default Navbar