import React from 'react'
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <>
    <footer>
  <div className="container">
    <div className="row">
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
        </ul>
      </div>
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">Company</span>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              About us
            </Link>
          </li>
         
        </ul>
      </div>
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">Contact &amp; Support</span>
          </li>
          <li className="nav-item">
            <span className="nav-link">
              <i className="fas fa-phone" />
              +8684085555
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link">
              <i className="fas fa-email" />
              surenderlogistics55@gmail.com
            </span>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              <i className="fas fa-envelope" />
              Contact us
            </Link>
          </li>
         
        </ul>
      </div>
    </div>
    <div className="text-center">
      <i className="fas fa-ellipsis-h" />
    </div>
    <div className="row text-center">
      <div className="col-md-4 box">
        <span className="copyright quick-links">Copyright © Your Website</span>
      </div>
    
         
      <div className="col-md-4 box">
        <ul className="list-inline quick-links">
          <li className="list-inline-item">
            <Link to="/">Privacy Policy</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/">Terms of Use</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
</>
  )
}

export default Footer