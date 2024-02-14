import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";

const Footers = () => {
    return (
        <>
            <div id='main' data-aos="fade-up">
                <div className="row"  data-aos="fade-up" data-aos-anchor=".other-element">
                
                    <div className="col-4">
                        <Link to='/'><img src={require("./Image/0.png")} id='photo'></img></Link>
                        <div>
                            <p id='foter'>© 2023 Creator.co. All rights reserved.</p>
                        </div>
                    </div>
                    <div className="col-2">
                        <h2 id='h2'>Brands</h2>
                        <div>
                            <p id='p'><Link to='/Brand_home' id='lnk'>Home</Link></p>
                            <p id='p'>Princing</p>
                            <p id='p'>Terms & Condition</p>
                            <p id='p'><Link to='/Brand_Contect' id='lnk'>Contect Us</Link></p>
                            <p id='p'>FAQ</p>
                        </div>
                    </div>
                    <div className="col-2">
                        <h2 id='h2'>Creators</h2>
                        <div>
                            <p id='p'><Link to='/Creatorhome' id='lnk'>Home</Link></p>
                            <p id='p'><Link to='/Privacypolic' id='lnk'>Privacy Policy</Link></p>
                            <p id='p'>Terms & Condition</p>
                            <p id='p'><Link to='/Creator_Contect' id='lnk'>Contect Us</Link></p>
                            <p id='p'>FAQ</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div id='img'>
                            <a href="https://www.facebook.com/CreatorCommunity"><img src={require("./Image/19.png")} id='logo' /></a>
                            <a href="https://www.instagram.com/creator.co.community/"><img src={require("./Image/20.png")} id='logo' /></a>
                            <a href="https://www.youtube.com/channel/UCi-e0d3ov7eshzQb5N5Wbxw"><img src={require("./Image/21.png")} id='logo' /></a>
                            <a href="https://twitter.com/creator_company"><img src={require("./Image/22.png")} id='logo' /></a>
                            <a href="https://www.tiktok.com/notfound"><img src={require("./Image/23.png")} id='logo' /></a>
                        </div>  
                    </div>
                </div>
            </div>
          
        </>
        
    )
}

export default Footers