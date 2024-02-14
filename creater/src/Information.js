import React from 'react'
import './Information.css'

const Information = () => {
  return (
    <>
      <div className="container" >
        <div>
          <p id='title' data-aos="fade-up"
     data-aos-duration="500">Influencer Marketing & The Creator Economy</p>
        </div>

        <div className="row" >
          <div className="col-4" data-aos="fade-up"
     data-aos-duration="500" >
            <div>
              <img src={require("./Image/16.png")} id='imag' ></img>
            </div>
            <div>
              <p id='info'>SEPTEMBER 5, 2022</p>
            </div>
            <div>
              <p id='information'>NFTs And Their Role In The Metaverse</p>
            </div>
          </div>
          <div className="col-4" data-aos="fade-up"
     data-aos-duration="1000">
            <div>
              <img src={require("./Image/17.png")} id='imag'></img>
            </div>
            <div>
              <p id='info'>AUGUST 29, 2022</p>
            </div>
            <div>
              <p id='information'>5 Reasons People Desire NFTs and Digital Art </p>
            </div>
          </div>
          <div className="col-4" data-aos="fade-up"
     data-aos-duration="2000">
            <div>
              <img src={require("./Image/18.png")} id='imag'></img>
            </div>
            <div>
              <p id='info'>AUGUST 26, 2022</p>
            </div>
            <div>
              <p id='information'>How Brands Should Be Using Instagram Reels</p>
            </div>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default Information