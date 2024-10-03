import React from 'react'
// import { a } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <span className="navbar-brand"  href='#'><strong>{props.title}</strong></span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            {/* <li className="nav-item">
              <a className="nav-a" to="/about" >About</a>
            </li> */}
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form> */}
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Change Mode
            </button>
            <ul className="dropdown-menu">
              <li><span onClick={()=>props.changeMode(1)} className="dropdown-item" href="#">DarkMode</span></li>
              <li><span onClick={()=>props.changeMode(2)} className="dropdown-item" href="#">LightMode</span></li>
              <li><span onClick={()=>props.changeMode(3)} className="dropdown-item" href="#">DangerMode</span></li>
              <li><span onClick={()=>props.changeMode(4)} className="dropdown-item" href="#">WarningMode</span></li>
            </ul>
          </div>
          {/* <div className={`form-check form-switch text-${props.mode==='light'?"dark":"light"}`}>
          <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" for="flexSwitchCheckDefault">{`${props.mode==='light'?"Enable":"Disable"} DarkMode`}</label>
          </div> */}
      </div>
    </div>
    </nav>
  )
}
