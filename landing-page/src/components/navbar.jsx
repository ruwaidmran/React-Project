import React from 'react';
import logo from '../images/logo.png';

function navbar() {
  return (
    <nav className="tt">
<a href="#home" className="logo">
    <img src={logo} alt=""/>
</a>
<input type="checkbox" className="menu-btn" id="menu-btn"/>
<label className="menu-icon" for="menu-btn">
    <span className="nav-icon"></span>
</label>
<ul className="menu">
    <li><a href="#home">home</a></li>
    <li><a href="#Features">features</a></li>
    <li><a href="#about">about</a></li>
    <li><a href="#uiss">Ui SS</a></li>
    <li><a href="#download">download</a></li>
</ul>
    </nav>
  )
}

export default navbar
