import React from 'react'
import { Link } from 'react-router-dom'

export default function navbar() {
  return (
    <div className='sticky-top'>
      <nav  id='navbarStyle' className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Rafting</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center me-4 navFont">
        <li className="nav-item ">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="About">About</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/Pics">Gallery</Link>
        </li>
       
       
        
        
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}
