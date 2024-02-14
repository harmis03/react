import React from 'react'
import "./Brand_dashboard.css"
import { Link } from 'react-router-dom'

function Brand_dashboard() {
  const name = localStorage.getItem("brand_name");
    
  return (
    <>
    <div>
      <aside id='aside'>
        <p>{name}</p>
        <Link to='/WelcomeForBrand'>
          <a>
            <i id="fa fa-user-o" aria-hidden="true" />
            My Dashboard
          </a>
        </Link>
        <Link to='/Wishlist'>
          <a>
            <i id="fa fa-user-o" aria-hidden="true" />
            Wishlist
          </a>
        </Link>
        <Link to='/SettingForBrand'>
          <a>
            <i id="fa fa-user-o" aria-hidden="true" />
            Setting
          </a>
        </Link>
        <Link to='/BrandCampigns'>
          <a>
            <i id="fa fa-user-o" aria-hidden="true" />
            My Campaigns
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

export default Brand_dashboard
