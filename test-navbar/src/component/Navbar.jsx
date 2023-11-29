/*eslint-disabled*/
import React from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>

        <li><Link to="/">Website</Link>
                </li>
        <ul>
        
            <li>
                <Link to="/Services">Services</Link>
                </li>
            <li>
                <Link to="/Contact">Contact</Link>
                </li> 
        </ul>

    </nav>
  )
}

export default Navbar
