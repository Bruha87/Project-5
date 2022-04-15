import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

function NavBar() {
  return (
    <nav>
      <div className="nav-bar">
        <ul className="nav-menu">
          <p> <Link to='/'>Home</Link></p>
          <p> <Link to='/activities'>All Activities</Link></p>
          <p> <Link to='/users'>My Profile</Link></p>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;