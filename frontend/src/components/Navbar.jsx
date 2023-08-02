import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link class="nav-link active" to={"/"}>Login</Link>
                  <Link class="nav-link" to={"/register"}>Register</Link>
                  <Link class="nav-link" to={"/dashboard"}>Dashboard</Link>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar