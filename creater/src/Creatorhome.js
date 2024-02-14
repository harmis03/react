import React, { useState } from 'react'
import Header from './Header'
import Slider from './Slider'
import './Creatorhome.css'
import Information from './Information'
import Footer from './Footers'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import HeaderForCreator from './HeaderForCreator'

const Creatorhome = () => {
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
                        navigate('/Creatorhome')
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
                <HeaderForCreator />
                <div>
                    <div id="c_home">
                        <div className="row">
                            <div className="col-6">
                                <p id='c_content'>
                                    The <span id='span'>leading</span> platform
                                    for aspiring influencers & creators
                                </p>
                                <div>
                                    <p id='c_info'>
                                        Collab with amazing brands, grow your channels, and earn more money
                                    </p>
                                </div>
                                <div>
                                    <button id='c_button'><Link to="/Collabration" id='lnk'>Collab</Link></button>
                                </div>
                            </div>
                            <div className="col-6">
                                <div>
                                    <img src={require('./Image/5.png')} id='c_img'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Slider />
                </div>


                <div data-aos="fade-up"   >
                    <div id="c_brand">
                        <p id='c_information'>
                            start collborating with amazing brands
                        </p>

                        <div>
                            <button id='c_sign'><Link to='/Creatorregister' id='lnk'>Sign up</Link></button>
                        </div>
                    </div>
                </div>


                <Information />


                <div data-aos="fade-up">
                    <main>
                        <form className='form'>
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


               <Footer/>
            </div>

        </>
    )
}

export default Creatorhome