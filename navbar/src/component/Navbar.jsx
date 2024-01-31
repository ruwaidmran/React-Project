/*eslint-disable*/
import React, {useState} from 'react'
import { Link } from "react-router-dom"
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  const[menuOpen, SetmenuOpen]= useState(false)
return (

<nav className="Nav-bar">

<li><Link to="/">Website</Link></li>
<div className="menu" onClick={()=>{
  setMenuOpen(!menuOpen);
}}>
  <span></span>
  <span></span>
  <span></span>
</div>
  <ul className={menuOpen ?  "open": ""}>
    <li><NavLink to="/Services">Services</NavLink></li>
    <li><NavLink to="/Contact">Contact</NavLink></li>
    <li><NavLink to="/About">About</NavLink></li>
  </ul>

</nav>

)
}

export default Navbar