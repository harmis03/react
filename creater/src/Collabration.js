import React, { useEffect, useState } from 'react'
import Header from './Header'
import './Collabration.css'
import Footers from './Footers'
import axios from 'axios'
import { Link, useNavigate, useHistory } from 'react-router-dom'
// import { BiLeftArrowCircle } from 'react-icons/bi'
import { useDispatch } from "react-redux";
import { add } from './Redux/CreateSlice/Cartslice'
import HeaderForWishlist from './HeaderForWishlist'

const Collabration = () => {

    const [Collabration, setCollabration] = useState([''])
    const navigate = useNavigate();
    const dispatch = useDispatch();


    useEffect(() => {

        axios.get("http://localhost:5000/Collabration/Collab")
            .then((response) => {

                let data = response.data

                setCollabration(data)
            })

            .catch((error) => {
                console.log(error)
            })
    }, []);

    const Addtocart = (item) => {
        dispatch(add(item));
        console.log(item);
    };


    return (

        <>
            <div >
                <HeaderForWishlist />
                <div id='collaration_bg' data-aos="fade-up">
                    <h1 className="wishme" id="b">Collboration Hub</h1>
                    <p id='colla_h1' className="wishyou">1.Explore Campaigns</p>
                    <p id='colla_h1' className="wishyou">2.Do you Qualify ?</p>
                    <p id='colla_h1' className="wishyou">3.Review of Deliveribles</p>
                </div>
                <div>

                    <div className='row kemcho' data-aos="flip-right">
                        {Collabration.map((item, index) => {
                            return (
                                <>
                                    <div className='col-3 main-div'>
                                        <div className="row_border" key={index}>

                                            <p id='coll_p'>{item.collab_name}</p>

                                            <div className="toggle">
                                                <Link to='/Wishlist' id='lnk'>{" "}

                                                    <input type="checkbox" id="heart-check" />
                                                    <label htmlFor="heart-check" id="heart">
                                                        <svg
                                                            viewBox="0 0 24 22"
                                                            version="1.1"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            onClick={() => {
                                                                Addtocart(item);
                                                            }}

                                                        >
                                                            <path
                                                                id="initial"
                                                                d="M11.8189091,20.3167303 C17.6981818,16.5505143 20.6378182,12.5122542 20.6378182,8.20195014 C20.6378182,5.99719437 18.8550242,4 16.3283829,4 C13.777264,4 12.5417153,6.29330284 11.8189091,6.29330284 C11.0961029,6.29330284 10.1317157,4 7.30943526,4 C4.90236126,4 3,5.64715533 3,8.20195014 C3,12.5122346 5.93963637,16.5504946 11.8189091,20.3167303 Z"
                                                            />
                                                            <path
                                                                id="stroke"
                                                                fill="none"
                                                                d="M11.8189091,20.3167303 C17.6981818,16.5505143 20.6378182,12.5122542 20.6378182,8.20195014 C20.6378182,5.99719437 18.8550242,4 16.3283829,4 C13.4628072,4 10.284995,6.64162063 10.284995,8.70392731 C10.284995,10.0731789 10.8851209,10.9874447 11.8189091,10.9874447 C12.7526973,10.9874447 13.3528232,10.0731789 13.3528232,8.70392731 C13.3528232,6.64162063 10.1317157,4 7.30943526,4 C4.90236126,4 3,5.64715533 3,8.20195014 C3,12.5122346 5.93963637,16.5504946 11.8189091,20.3167303 Z"
                                                            />
                                                        </svg>
                                                    </label>
                                                </Link>
                                            </div>

                                            <div>
                                                <p id='coll_cont' className='text-truncate'>{item.collab_content}</p>
                                            </div>
                                            <div id='coll_payment'>
                                                <p>Payment: <span id='coll_span'>${item.payment} USD</span></p>
                                            </div>
                                            <div className='main-img'>
                                                <Link to='/CollabrationDetails' onClick={() => {
                                                    Addtocart(item);
                                                }}> <img src={item.image} id='p_img' ></img> </Link>
                                            </div>
                                            <div className='coll_border'>
                                            </div>
                                            <div className='requirment'>
                                                <span id='col_foll'>Followers : <span id='col_span'>{item.followers}</span> </span>
                                                <span id='col_foll'>Engagement: <span className='col_span'>{item.engagement}%</span> </span>
                                                <span id='col_foll'>Age(max) : <span id='col_span'>{item.min_age} to {item.max_age}</span></span>
                                                <span id='col_foll'>Residence :<span className='resident'>{item.residence}</span></span>
                                            </div>
                                            <div className='coll_border'>
                                            </div>
                                            <div>


                                            </div>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
                <Footers />
            </div>
        </>


    )
}

export default Collabration


