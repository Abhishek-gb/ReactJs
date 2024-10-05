import React from "react";
import logo from '../assets/ait logo.png'

function Navbar() {
  return (
    <div class="container-fluid">
      <nav className="navbar navbar-expand-lg bg-dark">
        <img src={logo} alt="logo" width={200}/>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon bg-light"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item me-2 text-light">HOME </li>
          <li class="nav-item me-2 text-light">COURSES</li>
          <li class="nav-item me-2 text-light">INTERNSHIP</li>
          <li class="nav-item me-2 text-light">REVIEWS</li>
          <li class="nav-item me-2 text-light">LOGIN</li>
          <li class="nav-item me-2 text-light">SIGNUP</li>
        </ul>
      </div>
      </nav>
    </div>
  );
}

export default Navbar;
