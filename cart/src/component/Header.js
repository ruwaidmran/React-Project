/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'react-types'

export default function Header(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">{props.title}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>

     
      </ul>
     {props.searchBar? <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>: "no "}
    </div>
  </nav>
  )
}
Header.defaultProps = {
  title: " ",
searchBar: false
}  
 
Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}