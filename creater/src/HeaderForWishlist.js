import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import './Home.css'
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { DropdownButton } from 'react-bootstrap';
import './Header.css';

function HeaderForWishlist() {
    let userId = localStorage.getItem("userId");
    let userName = localStorage.getItem("userName");
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
              <Link>{}</Link>
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
              <Link>Status</Link>

              {userId !== null ? (
                <div className="dropdown">
                  <Link onClick={() => { logout(); }}>Logout</Link>
                </div>
              ) : (
                <div className="dropdown">
                  <Link to='/Login'>Login</Link>
                  <Link to='/Register'>Logout</Link>
                </div>
              )}

            </li>
          </ul>
        </nav>
        
      </div>
   </>
  )
}

export default HeaderForWishlist
