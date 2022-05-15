import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

function NavBar() {
  return (
    <nav>
      <div id="nav-bar">
        <ul className="nav-menu">
          <h2> <Link to='/'>Home</Link></h2>
          <h2> <Link to='/activities'>All Activities</Link></h2>
          <h2> <Link to='/users'>My Profile</Link></h2>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;