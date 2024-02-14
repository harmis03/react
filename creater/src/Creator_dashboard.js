import React from 'react'
import Header from './Header'
import Slider from './Slider'
import "./Creatordashboard.css"
import { Link } from 'react-router-dom'

const Creator_dashboard = () => {
  let userName = localStorage.getItem("userName");
  return (
    <>
      <div>
        <aside id='aside'>
          <p>{userName}</p>
          <Link to='/WelcomeForCreator'>
            <a>
              <i id="fa fa-user-o" aria-hidden="true" />
              My Dashboard
            </a>
          </Link>
          <Link to='/Wishlistforcreator'>
            <a>
              <i id="fa fa-user-o" aria-hidden="true" />
              Wishlist
            </a>
          </Link>
          <Link to='/SettingForCreator'>
            <a>
              <i id="fa fa-user-o" aria-hidden="true" />
              Setting
            </a>
          </Link>

          <Link to='/App'>
            <a href="">
              <i id="fa fa-trash-o" aria-hidden="true" />
              Sign Out
            </a>
          </Link>
        </aside>
        <div id="social">
          <a href="https://www.linkedin.com/in/florin-cornea-b5118057/" target="_blank">
            <i id="fa fa-linkedin" />
          </a>
        </div>
        <p></p>
      </div>
    </>

  )
}

export default Creator_dashboard