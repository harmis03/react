import React, { useEffect, useState } from 'react'
import './CollabrationDetails.css'
import Header from './Header'
import './Collabration.css'
import Footers from './Footers'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import HeaderForWishlist from './HeaderForWishlist'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom';

const CollabrationDetails = () => {

    const displayCart = useSelector((state) => state.cart);
    const [Get_collb, setGet_collb] = useState([''])

    useEffect(() => {

        axios.get("http://localhost:5000/Collabration/Get_collab/:id")
            .then((response) => {

                let data = response.data

                displayCart(data)
            })

            .catch((error) => {
                console.log(error)
            })
    }, [])

    useEffect(() => {
        axios.get("http://localhost:3000/Collabration/Collab")
            .then((response) => {
                let data = response.data

                setGet_collb(data);
            })
            .catch((error) => {
                console.log(error);
            })
    })


    return (

        <>

            <div>
                <div>
                    <HeaderForWishlist />
                    <div className='simple'>
                        <div className="back_button">
                            <a href="collabration" id='lnk'><button className='button_back'>
                                <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow_left' />
                            </button></a>
                        </div>
                        {Get_collb.map((item, index) => {
                            return (<>
                                {displayCart.map((item, index) => {
                                    return (
                                        <div>
                                            <div className="campainebody">
                                                <div className="campaine_info">
                                                    <div className="campain_header" key={index}>
                                                        <h1 className='align-center'>{item.collab_name}</h1>
                                                        <h5>{item.collab_content}</h5>
                                                    </div>
                                                    <div className="image_gallery">
                                                        <img className='my_image' src={item.image}  ></img>
                                                    </div>

                                                    <div className='priduct_discription' key={index}>
                                                        <h2 className='Compensation'>Compensation</h2>
                                                        <div className='paid_campaine'>
                                                            <p className='greenmy'> Paid campaign: $ {item.payment} USD</p>
                                                            <h6>{item.Compensation}</h6>
                                                        </div>
                                                    </div>
                                                    <div className="campaine_details">
                                                        <h2 className='Compensation'>Campaign Description</h2>
                                                        <div className='only_margin'>
                                                            <p>{item.Campaign_Description}</p>
                                                        </div>
                                                    </div>


                                                </div>
                                                <div className='campain_requirement'>
                                                    <div className='Qualifications'>
                                                        <h2 className='Compensation'>Qualifications</h2>
                                                        <div className='Qualifications2'>
                                                            <span id='col_foll1'>Followers :</span>
                                                            <span id='col_span1'>{item.followers}</span>
                                                        </div>
                                                        <div className='Qualifications2'>
                                                            <span id='col_foll1'>Engagement</span>
                                                            <span id='col_span1'>{item.engagement}% </span>
                                                        </div>
                                                        <div className='Qualifications2'>
                                                            <span id='col_foll1'>Age(max) : </span>
                                                            <span id='col_span1'>{item.min_age} to {item.max_age}</span>
                                                        </div>
                                                        <div className='Qualifications2'>
                                                            <span id='col_foll1'>Residence :</span>
                                                            <span id='col_span1'>{item.residence}</span>
                                                        </div>
                                                    </div>
                                                    <div className='campaine_objective'>
                                                        <h2 className='Compensation'>
                                                            Deliverables
                                                        </h2>
                                                        <div className='objective'>
                                                            <h6>{item.Deliverables}</h6>
                                                        </div>
                                                        <Link to="/Detailget" id='lnk'><div className='password_iner' data-aos="flip-left">

                                                            <button className='change_byutton'>Get Detail of Brand</button>
                                                        </div>
                                                            </Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    );
                                })}
                            </>

                            );
                        })}
                    </div>

                </div>
                <Footers />
            </div>
        </>


    )
    // const [Collabration, setCollabration] = useState([''])

    // useEffect(() => {

    //     axios.get("http://localhost:5000/Collabration/Get_collab")
    //         .then((response) => {

    //             let data = response.data

    //             setCollabration(data)
    //         })

    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }, [])

    // return (
    //     <><div>
    //         <Header />
    //         <div className='simple'>
    //             <div className="back_button">
    //                 <button className='button_back'>
    //                     back
    //                 </button>
    //             </div>
    //             <div>
    //             <div className="campainebody">
    //                 <div className="campaine_info">
    //                     <div className="campain_header">
    //                         <h1>h</h1>
    //                         <div className="image_gallery">

    //                         </div>
    //                     </div>
    //                 </div>

    //             </div>
    //             </div>
    //         </div>
    //     </div>
    //     </>
    // )
}

export default CollabrationDetails