import React from 'react'

const NavBar = (props) => {
    return ( 
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <a className="navbar-brand text-light" href="#">Start BootStrap</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ms-auto">
      <a className="nav-item nav-link text-light active" href="#">Home <span class="sr-only">(current)</span></a>
      <a className="nav-item nav-link text-secondary" href="#">Features</a>
      <a className="nav-item nav-link text-secondary" href="#">Pricing</a>
      <a className="nav-item nav-link text-secondary disabled" href="#">Disabled</a>
    </div>
  </div>
</nav>

    );
}
 export default NavBar