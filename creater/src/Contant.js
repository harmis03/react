import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Content.css';
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';
const Contant = () => {
    return (
        <>
            <div className="" id='clr' >
                <div className='position-relative'>
                    <div class="jig-loaded">
                        <img src={require("./Image/1.png")} id='card_img' ></img>
                    </div>
                    <div>
                        <p id='content' >
                        <Typewriter

                            onInit={(typewriter) => {

                                typewriter

                                    .typeString("Where brands and creators connect, collaborate, grow, & earn more money")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Where brands and creators connect, collaborate, grow, & earn more money")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Where brands and creators connect, collaborate, grow, & earn more money")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Where brands and creators connect, collaborate, grow, & earn more money")
                                    .start();
                            }}
                        /></p>
                    </div>
                    <div className='position-absolute top-0 end-0' >
                        <img src={require("./Image/3.png")} id='card_img' ></img>
                    </div>

                    <div className='position-relative'>
                        <div className=''>
                            <img src={require("./Image/4.png")} id='card_img'></img>
                        </div>
                        {/* <button id='btn' className='position-absolute top-50 start-50'>
                        
                        </button> */}
                        <div className='position-absolute top-0 end-0' >
                            <img src={require("./Image/5.png")} id='card_img' ></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contant