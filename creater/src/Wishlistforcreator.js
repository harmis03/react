import React from 'react'
import Header from './Header'
import Creator_dashboard from './Creator_dashboard'
import './Wishlist.css'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
// import { remove } from './Redux/CreateSlice/Cartslice';
import { add } from './Redux/CreateSlice/Cartslice'
import axios from 'axios';
import HeaderForWishlist from './HeaderForWishlist';
import Headerforcreatorwithwishlist from './Headerforcreatorwithwishlist';

const Wishlistforcreator = () => {
    const totalitems = useSelector((state) => state.cart);
    const displayCart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    // const removeitems = (item) => { 
    //     dispatch(remove(item));
    //     console.log(item);
    // }
    const Addtocart = (item) => {
        dispatch(add(item));
        console.log(item);
    };
  return (
    <>
    <Headerforcreatorwithwishlist />
    <div id='wel-main'>
        <div id="sidebar" data-aos="flip-left">
            {/* <Creator_dashboard /> */}
        </div>
        <div className='second_div3'>
            <div id='dashboard' data-aos="flip-left">
                <h1 className='wishme' id='b'>
                    MY Wishlist For Creator
                </h1>
            </div>
            <div className='row' data-aos="fade-up">
            {displayCart.map((item, index) => {
                return(

                <>
                    <div className='col-3 main-div'>
                        <div className="row_border" key={index}>
                            <p id='coll_p'>{item.collab_name}</p>
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
                                <span id='col_foll'>Age(max) : <span id='col_span'>{item.min_age} to{item.max_age}</span></span>
                                <span id='col_foll'>Residence :<span className='resident'>{item.residence}</span></span>
                            </div>
                            <div className='coll_border'>
                            </div>
                            <div>
                           <button id='col_btn'>
                           
                             <a href='WelcomeForCreator' id='lnk'>Delete</a>
                           
                           </button> 
                            </div>
                        </div>

                    </div>
                </>
            );})}
            </div>
        </div>
    </div>
</>
  )
}

export default Wishlistforcreator