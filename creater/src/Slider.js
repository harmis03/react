import React from 'react'
import './Slider.css'
const Slider = () => {
  return (
    <>  
        <div data-aos="fade-up"   >   
            <div  >
                <p id='brand'>BRAND'S & PARTNERS</p>
            </div> 
          <div className="slider" id='slidr' >
              <div className="slide-track">
                  <div className="slide">
                      <img src={require("./Image/6.png")} height={100} width={200} alt />
                  </div>
                  <div className="slide">
                      <img src={require("./Image/7.png")} height={100} width={200} alt />
                  </div>
                  <div className="slide">
                      <img src={require("./Image/8.png")} height={100} width={200} alt />
                  </div>
                  <div className="slide">
                      <img src={require("./Image/9.png")} height={100} width={200} alt />
                  </div>
                  <div className="slide">
                      <img src={require("./Image/10.png")} height={100} width={200} alt />
                  </div>
                  <div className="slide">
                      <img src={require("./Image/11.png")} height={100} width={200} alt />
                  </div>
                  <div className="slide">
                      <img src={require("./Image/12.png")} height={100} width={200} alt />
                  </div>
                  <div className="slide">
                      <img src={require("./Image/13.png")} height={100} width={200} alt />
                  </div>
                  <div className="slide">
                      <img src={require("./Image/14.png")} height={100} width={200} alt />
                  </div>
                  <div className="slide">
                      <img src={require("./Image/15.png")} height={100} width={200} alt />
                  </div>
              </div>
          </div>
    </div>
   
    </>
  )
}

export default Slider