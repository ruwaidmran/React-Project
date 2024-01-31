
import React from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
return (
<nav className="Nav-bar">
  <ul>
    <li><Link to="/">Website</Link></li>
    <li><Link to="/Services">Services</Link></li>
    <li><Link to="/Contact">Contact</Link></li>
    <li><Link to="/About">About</Link></li>
  </ul>

</nav>
)
}

export default Navbar