import React, { useState } from 'react'
import Header from './Header'
import './Brand_home.css'
import Slider from './Slider'
import { Link, useNavigate } from 'react-router-dom'
import Information from './Information'
import Footer from './Footers'
import axios from 'axios'
import './Rating.css'
import Typewriter from "typewriter-effect";
import HeadetForBrand from './HeadetForBrand'



const Brand_home = () => {
    const [message, setmessage] = useState('');

    const navigate = useNavigate();

    const submit = () => {
        if (
            message !== ''
        ) {
            axios.post('http://localhost:5000/Rating/response', {
                message: message
            })

                .then((response) => {
                    let data = response.data;
                    console.log(data)

                    if (data.id !== '') {
                        navigate('/Brand_home')
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    return (
        <>
            <div>
                <HeadetForBrand />
                <div id='brand_bg'>
                    <div className="row container">
                        <div className="col-7">
                            <p id='brand_info'>
                                Drive <span id='brand_span'>
                                    <Typewriter className="Typewriter"

                                        onInit={(typewriter) => {

                                            typewriter

                                                .typeString("collaboration")

                                                .pauseFor(1000)
                                                .deleteAll()
                                                .typeString("Customers")
                                                .pauseFor(1000)
                                                .deleteAll()
                                                .typeString("Community")
                                                .pauseFor(1000)
                                                .deleteAll()
                                                .typeString("Awarness")
                                                .pauseFor(1000)
                                                .deleteAll()
                                                .typeString("Trust")
                                                .pauseFor(1000)
                                                .deleteAll()
                                                .typeString("Traffic")
                                                .pauseFor(1000)
                                                .deleteAll()
                                                .typeString("Content")
                                                .start();
                                               
                                        }}
                                    />

                                </span>
                                <div> with Creators <br /> & influencers</div>
                            </p>
                            <div>
                                <p id='brand_cont'>
                                    The all-in-one platform to scale influencer and affiliate <br /> marketing campaigns
                                </p>
                            </div>
                            <div>
                               <Link to='/Collabration'> <button id='brand_button'>Get Started</button></Link>
                            </div>
                        </div>
                        <div className="col-5">
                            <img src={require('./Image/4.png')} id='brand_img'></img>
                        </div>
                    </div>
                </div>

                <div   >
                    <Slider />
                </div>


                <div id='brand_cont_bg' className='container' data-aos="fade-up" >
                    <p id='brand_sign'>
                        Sign up today to join <br /> our ecosystem

                    </p>
                    <div>
                        <button id='brand_signup'><Link to='/Brandregister' id='lnk'>Sign up</Link></button>
                    </div>
                </div>

                <div className='container' data-aos="fade-up">
                    <p id='brand_easy'>Getting Started Is Easy</p>

                    <div>
                        <div className="row">
                            <div className="col-4">
                                <div>
                                    <img src={require('./Image/4.png')} id='brand_image'></img>
                                </div>

                                <div>
                                    <p id='brand_information'>Build a campaign brif</p>
                                </div>
                            </div>
                            <div className="col-4">
                                <div>
                                    <img src={require('./Image/5.png')} id='brand_image'></img>
                                </div>

                                <div>
                                    <p id='brand_information'>Creators apply</p>
                                </div>
                            </div>
                            <div className="col-4">
                                <div>
                                    <img src={require('./Image/3.png')} id='brand_image'></img>
                                </div>

                                <div>
                                    <p id='brand_information'>Activate the ones you want</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='brand_register' data-aos="fade-up">
                    <p id='brand_login'>Sign up Today</p>

                    <div>
                        <button id='brand_buttons'><Link to='/Brandregister' id='lnk'>Create Accounts</Link></button>
                        <button id='brand_buttons'>Book a Demo</button>
                    </div>
                </div>
                <Information />
                <div data-aos="fade-up">
                    <main >
                        <form className='form' >
                            <h3>Rate Us</h3>
                            <p>How was your experience using our Website? Your rating matter!</p>
                            <div className="rating">
                                <input type="radio" name="rating" id="rating-1" defaultValue={1} />
                                <input type="radio" name="rating" id="rating-2" defaultValue={2} />
                                <input type="radio" name="rating" id="rating-3" defaultValue={3} />
                                <input type="radio" name="rating" id="rating-4" defaultValue={4} />
                                <input type="radio" name="rating" id="rating-5" defaultValue={5} />
                                <div className="rating__box">
                                    <label htmlFor="rating-1" className="rating__star">★</label>
                                    <label htmlFor="rating-2" className="rating__star">★</label>
                                    <label htmlFor="rating-3" className="rating__star">★</label>
                                    <label htmlFor="rating-4" className="rating__star">★</label>
                                    <label htmlFor="rating-5" className="rating__star">★</label>
                                </div>
                            </div>
                            <div className="textarea-group">
                                <label>
                                    <span>Feedback : </span>
                                    <textarea id="comment-rating" placeholder="Additional feedback ..." name="feedback" defaultValue={""} onChange={(e) => { setmessage(e.target.value) }} required />
                                </label>
                            </div>
                            <div className="action-group">
                                <button Value="submit" onClick={() => { submit() }} >Submit</button>
                            </div>
                        </form>
                    </main>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Brand_home