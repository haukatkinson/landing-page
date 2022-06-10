import React from 'react'

const NavBar = (props) => {
    return ( 
<nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <a class="navbar-brand text-light" href="#">Start BootStrap</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav ms-auto">
      <a class="nav-item nav-link text-light active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link text-secondary" href="#">Features</a>
      <a class="nav-item nav-link text-secondary" href="#">Pricing</a>
      <a class="nav-item nav-link text-secondary disabled" href="#">Disabled</a>
    </div>
  </div>
</nav>

    );
}
 export default NavBar