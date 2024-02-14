import React, { useEffect, useState } from 'react'
import Header from './Header'
import Creator_dashboard from './Creator_dashboard'
import './Setting.css'
import { Link, useNavigate } from "react-router-dom";
import Footer from './Footers'
import axios from 'axios';
import HeaderForCreator from './HeaderForCreator';

const SettingForCreator = () => {
    const creator_name = localStorage.getItem("creator_name");
    const mobilenumber = localStorage.getItem("c_mobilenumber");
    const email = localStorage.getItem("c_email");
    const password = localStorage.getItem("c_password");

    return (
        <>
            <HeaderForCreator/>
            <div id='wel-main'>
                <div id="sidebar" data-aos="flip-left">
                    <Creator_dashboard />
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
                                                <input className='ant_input' type="text" name="" id="" value={creator_name}></input>
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
                                                <input className='ant_input' type="text" name="" id="" value={mobilenumber}></input>
                                            </div>
                                            <div className='ant_col'>
                                                <label htmlFor="" className='item_lable'>
                                                    <span>Password </span>
                                                </label>
                                                <input className='ant_input' type="text" name="" id="" value={password}></input>
                                            </div>
                                        </div>
                                    </form>
                                    </>

                            

                        </div>
                    </section>

                    <Footer />
                </div>
            </div>
        </>
    )
}

export default SettingForCreator