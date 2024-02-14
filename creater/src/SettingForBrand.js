import React from 'react'
import Header from './Header'
import Creator_dashboard from './Creator_dashboard'
import Footer from './Footers'
import HeadetForBrand from './HeadetForBrand'
import Brand_dashboard from './Brand_dashboard'


const SettingForBrand = () => {
    const name = localStorage.getItem("brand_name");
    const email = localStorage.getItem("email");
    const contact = localStorage.getItem("mobilenumber");
    const password = localStorage.getItem("password");
    return (
        <>
            <HeadetForBrand/>
            <div id='wel-main'>
                <div id="sidebar" data-aos="flip-left">
                    <Brand_dashboard />
                </div>
                <div className='second_div'>
                    <section>
                        <div id='account'>
                            <h2 className='account_details' data-aos="flip-left">
                                Account Details
                            </h2>

                            <>
                                <form className='ant_from' action="" data-aos="flip-left" >
                                    <div className='ant_row' >
                                        <div className='ant_col'>
                                            <label htmlFor="" className='item_lable'>
                                                <span>Fisrt name </span>
                                            </label>
                                            <input className='ant_input' type="text" name="" id=""value={name}></input>
                                        </div>
                                        <div className='ant_col'>
                                            <label htmlFor="" className='item_lable'>
                                                <span>Email </span>
                                            </label>
                                            <input className='ant_input' type="text" name="" id=""value={email}></input>
                                        </div>
                                    </div>
                                    <div className='ant_row'>
                                        <div className='ant_col'>
                                            <label htmlFor="" className='item_lable'>
                                                <span>Phone </span>
                                            </label>
                                            <input className='ant_input' type="text" name="" id=""value={contact}></input>
                                        </div>
                                        <div className='ant_col'>
                                            <label htmlFor="" className='item_lable'>
                                                <span>Password </span>
                                            </label>
                                            <input className='ant_input' type="text" name="" id=""value={password}></input>
                                        </div>
                                    </div>
                                </form>
                            </>

                            {/* <div className='password_iner' data-aos="flip-left">
                                <h4>Password</h4>
                                <button className='change_byutton'>Change</button>
                            </div> */}

                        </div>
                    </section>

                    <Footer />
                </div>
            </div>
        </>
    )
}

export default SettingForBrand