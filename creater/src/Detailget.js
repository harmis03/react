import React from 'react'
import Footers from './Footers'
import Header from './Header';
import HeaderForWishlist from './HeaderForWishlist';
import './Setting.css'

const Detailget = () => {
  const name = localStorage.getItem("brand_name");
  const email = localStorage.getItem("email");
  const contact = localStorage.getItem("mobilenumber");
  const password = localStorage.getItem("password");
  return (
   
    <>
    <HeaderForWishlist/>
    <div id='wel-main'>
                <div id="sidebar" data-aos="flip-left">
                   
                </div>
                <div className=''>
                    <section>
                        <div id='account'>
                            <h2 className='account_details' id="manu" data-aos="flip-left">
                                Account Details Of Brand
                            </h2>

                            <>
                                <form className='ant_from' action="" data-aos="flip-left" >
                                    <div className='ant_row' >
                                        <div className='ant_col'>
                                            <label htmlFor="" className='item_lable'>
                                                <span>Fisrt name </span>
                                            </label>
                                            <input className='ant_input' type="text" name="" id="" value={name}></input>
                                        </div>
                                        <div className='ant_col'>
                                            <label htmlFor="" className='item_lable'>
                                                <span>Email </span>
                                            </label>
                                            <input className='ant_input' type="text" name="" id="" value={email}></input>
                                        </div>
                                    </div>
                                    <div className='ant_row'>
                                        <div className='ant_col'>
                                            <label htmlFor="" className='item_lable'>
                                                <span>Phone </span>
                                            </label>
                                            <input className='ant_input' type="text" name="" id="" value={contact}></input>
                                        </div>
                                        
                                    </div>
                                </form>
                            </>

                            

                        </div>
                    </section>

                    <Footers /> 
                </div>
            </div>
    </>
  )
}

export default Detailget