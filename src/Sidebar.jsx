import React from 'react'
import './layout.css'

export const Sidebar = () => {
  return (
    <>
  <aside id="sidebar-wrapper">
    <div className="sidebar-brand">
      <h2>Logo</h2>
    </div>
    <ul className="sidebar-nav">
      <li className="active">
        <a href="#">
          <i className="fa fa-home" />
          Home
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-plug" />
          Plugins
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-user" />
          Users
        </a>
      </li>
    </ul>
  </aside>
  <div id="navbar-wrapper">
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a href="#" className="navbar-brand" id="sidebar-toggle">
            <i className="fa fa-bars" />
          </a>
        </div>
      </div>
    </nav>
  </div>
</>

  )
}
