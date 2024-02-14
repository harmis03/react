import React from 'react'
import Header from './Header'
import Creator_dashboard from './Creator_dashboard'
import './Welcome.css'
import { Link, useNavigate } from "react-router-dom";
import Footer from './Footers'
import HeaderForCreator from './HeaderForCreator';
import HeadetForBrand from './HeadetForBrand';
import Brand_dashboard from './Brand_dashboard';

function WelcomeForBrand() {
  return (
    <>
            <HeadetForBrand />
            <div id='wel-main'>
                <div id="sidebar" data-aos="flip-left">
                    <Brand_dashboard/>
                </div>
                <div className='second_div'>
                    <div id='dashboard' data-aos="flip-left">
                        <h1>
                            My Dashboard
                        </h1>
                    </div>
                    <div id='change' data-aos="flip-left">
                        <div>
                            <h5>Connect your socials</h5>
                            <h6 id=''>In order to opt in to platform-specific campaigns, you must connect your social accounts.
                            </h6>
                            <Link to='/Setting' id='lnk'> Setting </Link>
                        </div>

                    </div>
                    <div className='overview' data-aos="flip-left">
                        <div className='two_card'>
                            <h5 className='main_name'>
                                My Campaigns
                                <div className='tags'>
                                    <div className='tag'>
                                        <span className='pending'>Pending</span>
                                        <span>0</span>
                                    </div>
                                </div>
                                <div className='tags '>
                                    <div className='tag'>
                                        <span className='pending Activated'> Activated
                                        </span>
                                        <span>0</span>
                                    </div>
                                </div>
                                <div className='tags'>
                                    <div className='tag'>
                                        <span className='pending Completed'>Completed</span>
                                        <span>0</span>
                                    </div>
                                </div>
                                <div className='tags'>
                                    <div className='tag'>
                                        <span className='pending Cancelled'>Cancelled</span>
                                        <span>0</span>
                                    </div>
                                </div>
                            </h5>
                        </div>
                        <div className='two_card'>
                            <h5 className='main_name'>Average ShoutOut Score</h5>
                            <div className='no_rating'>
                                <p>No rating yet.</p>
                                <button className='button1'>
                                    <Link to='/Collabration' id='lnk'>Get start</Link>
                                </button>
                                <p className='randam'>Complete campaigns to earn ratings! Your campaign history and ratings are visible to brands when reviewing your opt-in requests and higher scores mean even more collaborations.</p>
                            </div>
                        </div>

                    </div>
                    <Footer />
                </div>
            </div>
        </>
  )
}

export default WelcomeForBrand
