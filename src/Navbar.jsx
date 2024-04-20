import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <Link class="navbar-brand" to="/">Navbar</Link>
  
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        {/* <a class="nav-link" href="/aboutus">About us <span class="sr-only">(current)</span></a> */}
        <Link to="/aboutus" className='nav-link'>About us</Link>
      </li>
      <li class="nav-item">
        <Link to ="/empdashboard" className='nav-link'>Employee Dashboard</Link>
      </li>
      
      <li class="nav-item">
        <Link to ="/formdemo1" className='nav-link'>FORM DEMO 1</Link>
      </li>
      
      <li class="nav-item">
        <Link to ="/formdemo2" className='nav-link'>FORM DEMO 2</Link>
      </li>
    </ul>
   
  </div>
</nav>
  )
}
