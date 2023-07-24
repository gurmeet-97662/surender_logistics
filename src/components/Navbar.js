import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from "../assets/logo.jpeg"

function Navbar() {
  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img
          src={logo}
          alt="..."
          height={45}
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/service">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
</>
  )
}

export default Navbar