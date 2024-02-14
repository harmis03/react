import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import './Home.css'
import { Link, useNavigate } from "react-router-dom";
import './Header.css';

function HeadetForBrand() {
    let userId = localStorage.getItem("userId");
    const storedEmail = localStorage.getItem("brand_name");
    const navigate = useNavigate();
  
    const logout = () => {
      localStorage.removeItem("userId");
      localStorage.removeItem("userName");
      navigate("/");
    };
  return (
    
    <>
        <div className='sticky-top' >
        <nav className="navbar " >
        <Link to='/App'><img src={require('./Image/0.png')} id='image'></img></Link>
          <ul className="navbar-links">
            <li className="navbar-dropdown">
              <Link>{storedEmail}</Link>
            </li>
            <li className="navbar-dropdown">
              <Link>Brands</Link>
              <div className="dropdown">
                <Link to='/Brand_home'>Home</Link>
                <Link to='/Brand_contect'>Contact</Link>
                <Link to='/BrandLogin'>Login</Link>
                <Link to='/Brandregister'>Sign_up</Link>
              </div>
            </li>
            
            <li className="navbar-dropdown">
              <Link>Collaboration</Link>
              <div className="dropdown">
                <Link to='/Collabration'>Collaboration</Link>
              </div>
            </li>
            <li className="navbar-dropdown">
              <Link>Blog</Link>
              <div className="dropdown">
                <Link to='/Blog'>Blog</Link>
              </div>
            </li>
            
            <li className="navbar-dropdown">
            <Link>Profile</Link>
            <div className="dropdown">
              <Link to='/WelcomeForBrand'>Profile</Link>
            </div>
          </li>
            <li className="navbar-dropdown">
              <Link>Status</Link>

              {userId !== null ? (
                <div className="dropdown">
                  <Link onClick={() => { logout(); }}>Logout</Link>
                </div>
              ) : (
                <div className="dropdown">
                  <Link to='/Brandlogin'>Login</Link>
                  <Link to='/Brandregister'>Logout</Link>
                </div>
              )}

            </li>
          </ul>
        </nav>
        
      </div>
    </>
  )
}

export default HeadetForBrand
