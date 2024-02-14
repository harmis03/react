import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Blog.css'
import Footers from './Footers'
import Header from './Header'
import Information from './Information'
import './Rating.css'
import { Link } from "react-router-dom";
import HeaderForWishlist from './HeaderForWishlist'

const Blog = () => {

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
                        navigate('/Blog')
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
    return (
        <>
            <HeaderForWishlist />

            <div id='blog_upper' data-aos="fade-up">
                <div>
                    <div id="cards">
                        <a id="card">
                            <div id="card-hero">
                                <img src={require('./Image/colgate.png')} width={288} />
                            </div>
                            <div id="card-header">
                                <h5>Prevention is Better Than Cure: Why Oral Check-ups are</h5>
                            </div>
                            <div id="card-body">
                                <p>Keeping yourself healthy is an active venture. All the healthy choices you make build up to a wholesome life, and this is true and for oral health as well.</p>
                            </div>
                            <div id='blog_image'>
                                <a href="https://www.facebook.com/ColgateIndia/"><img src={require("./Image/19.png")} id='blog_logo' /></a>
                                <a href="https://www.instagram.com/colgate/"><img src={require("./Image/20.png")} id='blog_logo' /></a>
                                <a href="https://www.youtube.com/results?search_query=colgate"><img src={require("./Image/21.png")} id='blog_logo' /></a>
                                <a href="https://twitter.com/Colgate" ><img src={require("./Image/22.png")} id='blog_logo' /></a>
                            </div>
                        </a>
                        <a id="card">
                            <div id="card-hero">
                                <img src={require('./Image/s.png')} width={288} />
                            </div>
                            <div id="card-header">
                                <h5>TRESmme-Professional result at home. every day</h5>
                            </div>
                            <div id="card-body">
                                <p>this product helps reinforce your hair strength and prevents hair fall due to breakage.for the best results use daily with conditioner. style using  TRESmme.reinforce your hair strength.</p>
                            </div>
                            <div id='blog_image'>
                                <a href="https://www.facebook.com/TresemmeIndia/?brand_redir=547639685289923"><img src={require("./Image/19.png")} id='blog_logo' /></a>
                                <a href="https://www.youtube.com/@TresemmeIndia"><img src={require("./Image/20.png")} id='blog_logo' /></a>
                                <a href="https://www.youtube.com/results?search_query=colgate"><img src={require("./Image/21.png")} id='blog_logo' /></a>
                                <a href="https://twitter.com/Colgate" ><img src={require("./Image/22.png")} id='blog_logo' /></a>
                            </div>
                        </a>
                        <a id="card">
                            <div id="card-hero">
                                <img src={require('./Image/p.png')} width={288} />
                            </div>
                            <div id="card-header">
                                <h5>Emerging Stronger: Three Tips to Help Startups Thrive Through a Downturn</h5>
                            </div>
                            <div id="card-body">
                                <p>Most CEOs, especially those of us in the startup world, are grappling with the new reality of running a business during an economic downturn. The long-standing directive to grow at all costs is now a thing of the past. Today, profitability is king.</p>
                            </div>
                            <div id='blog_image'>
                                <a href="https://www.facebook.com/scentuals/"><img src={require("./Image/19.png")} id='blog_logo' /></a>
                                <a href="https://www.instagram.com/scentuals/?__coig_restricted=1"><img src={require("./Image/20.png")} id='blog_logo' /></a>
                                <a href="#"><img src={require("./Image/21.png")} id='blog_logo' /></a>
                                <a href="https://mobile.twitter.com/scentualbylilly" ><img src={require("./Image/22.png")} id='blog_logo' /></a>
                            </div>
                        </a>
                        <a id="card">
                            <div id="card-hero">
                                <img src={require('./Image/p1.png')} width={288} />
                            </div>
                            <div id="card-header">
                                <h5>NFTs And Their Role In The Metaverse</h5>
                            </div>
                            <div id="card-body">
                                <p>If you have found your way to this blog, you have probably already heard (at least a little bit) about NFTs and the Metaverse. What you may not fully understand is how their relationships are intertwined. With all of the buzz around these two concepts, more and more questions have been raised about the potential impact of the Metaverse and what role NFTs will play. To fully understand it, let’s start from the beginning.</p>
                            </div>
                            <div id='blog_image'>
                                <a href="https://www.facebook.com/TresemmeIndia/?brand_redir=547639685289923"><img src={require("./Image/19.png")} id='blog_logo' /></a>
                                <a href="https://www.youtube.com/@TresemmeIndia"><img src={require("./Image/20.png")} id='blog_logo' /></a>
                                <a href="https://www.youtube.com/results?search_query=colgate"><img src={require("./Image/21.png")} id='blog_logo' /></a>
                                <a href="https://twitter.com/Colgate" ><img src={require("./Image/22.png")} id='blog_logo' /></a>
                            </div>
                        </a>
                        <a id="card">
                            <div id="card-hero">
                                <img src={require('./Image/p2.jpg')} width={288} />
                            </div>
                            <div id="card-header">
                                <h5>How to Avoid Being “Cancelled”</h5>
                            </div>
                            <div id="card-body">
                                <p>Being “cancelled” is a fear that many influencers have at the back of their minds whenever they post their content. They may not face the same risk as A-list celebrities who could lose millions of dollars for posting an offensive tweet. But in this world of cancel culture, any influencer could get major backlash for offending people, which can effect financial opportunities in a negative way.effect financial opportunities.for offending people opportunities in a negative way</p>
                            </div>
                            <div id='blog_image'>
                                <a href="https://www.facebook.com/TresemmeIndia/?brand_redir=547639685289923"><img src={require("./Image/19.png")} id='blog_logo' /></a>
                                <a href="https://www.youtube.com/@TresemmeIndia"><img src={require("./Image/20.png")} id='blog_logo' /></a>
                                <a href="https://www.youtube.com/results?search_query=colgate"><img src={require("./Image/21.png")} id='blog_logo' /></a>
                                <a href="https://twitter.com/Colgate" ><img src={require("./Image/22.png")} id='blog_logo' /></a>
                            </div>
                        </a>
                        <a id="card">
                            <div id="card-hero">
                                <img src={require('./Image/p3.jpg')} width={288} />
                            </div>
                            <div id="card-header">
                                <h5>Mental Health Tips for Social Media Creators</h5>
                            </div>
                            <div id="card-body">
                                <p>Constantly dealing with hate comments is very taxing to a creator’s mental health. The common advice is to just “ignore the hate”, but this is much easier said than done. On top of this, creators also risk burnout as they independently produce the many pieces of content necessary for them to make an income from brand deals. Even taking a break from social media comes with stress, because when a creator breaks for too long.</p>
                            </div>
                            <div id='blog_image'>
                                <a href="https://www.facebook.com/TresemmeIndia/?brand_redir=547639685289923"><img src={require("./Image/19.png")} id='blog_logo' /></a>
                                <a href="https://www.youtube.com/@TresemmeIndia"><img src={require("./Image/20.png")} id='blog_logo' /></a>
                                <a href="https://www.youtube.com/results?search_query=colgate"><img src={require("./Image/21.png")} id='blog_logo' /></a>
                                <a href="https://twitter.com/Colgate" ><img src={require("./Image/22.png")} id='blog_logo' /></a>
                            </div>
                        </a>
                    </div>
                </div>
                <Information />
                <div>
                    <main>
                        <form className='form' data-aos="fade-up">
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
                                    <textarea id="comment-rating" placeholder="Additional feedback ..." name="feedback" required defaultValue={""} onChange={(e) => { setmessage(e.target.value) }} />
                                </label>
                            </div>
                            <div className="action-group">
                                <button Value="submit" onClick={() => { submit() }} >Submit</button>
                            </div>
                        </form>
                    </main>
                </div>
                <div id='blog_footer'>
                    <Footers />

                </div>
            </div>
        </>
    )
}

export default Blog