// import App from '../App';
import React from 'react'
import { BrowserRouter, Link, Outlet } from 'react-router-dom';



export default function Navbar(props) {



  return (
    <>
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={props.darkmode}>
  <div className="container-fluid" style={props.darkmode}>
  
  <BrowserRouter>
  <Link className="navbar-brand" to="/" style={props.darkmode}>Navbar</Link>
  <Outlet></Outlet>
  <Link className="nav-link" to= "About">About</Link>
  
  </BrowserRouter>
  
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"> */}
         <BrowserRouter>
                 
         
         
         </BrowserRouter>  
         
         
         <Outlet></Outlet>
          {/* <Link to="/about">About</Link> */}
        {/* </li>  */}
        {/* <li className="nav-item dropdown">
          <a style={props.darkmode} className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a  style={props.darkmode} className="dropdown-item" href="/">Action</a></li>
            <li><a style={props.darkmode} className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a style={props.darkmode} className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a style={props.darkmode} className="nav-link disabled" aria-disabled="true" href="/"> Disabled</a>
        </li> */}
      {/* </ul> */}
      <div className="form-check form-switch " >
      <input style={props.darkmode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"  onClick={props.bluemode} />
      <label style={props.darkmode} className="" htmlFor="" > Blue Mode </label>
      </div>
      <div className="form-check form-switch" >
      <input style={props.darkmode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"  onClick={props.greenmode} />
      <label style={props.darkmode} className="" htmlFor="" > Green Mode </label>
      </div>
      <form className="d-flex" role="search">

        <div className="form-check form-switch" >
      <input style={props.darkmode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"  onClick={props.mode} />
      <label style={props.darkmode} className="" htmlFor="" > Dark Mode </label>
      </div>
          </form>
    </div>
  </div>
</nav>
  
    </>
  )
}

Navbar.defaultProps = {
    name : "Your Name Here"
}