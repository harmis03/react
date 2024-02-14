import React, { useState } from 'react'
import './Creator_contact.css'
import Header from './Header'
import Footer from './Footers'
import axios from "axios";
import HeadetForBrand from './HeadetForBrand';

const Brand_Contect = () => {

    const [first_name, setfirst_name] = useState('');
    const [last_name, setlast_name] = useState('');
    const [mail, setmail] = useState('');
    const [company_name, setcompany_name] = useState('');
    const [company_website, setcompany_website] = useState('');
    const [company_phone, setcompany_phone] = useState('');
    const [message, setmessage] = useState('');


    const Submit_button = () => {
        if (first_name !== "" &&
            last_name !== "" &&
            mail !== "" &&
            company_name !== "" &&
            company_website !== "" &&
            company_phone !== "" &&
            message !== ""
        ) {
            axios.post("http://localhost:5000/Brand_contact/Contect_brand", {
                first_name: first_name,
                last_name: last_name,
                mail: mail,
                company_name: company_name,
                company_website: company_website,
                company_phone: company_phone,
                message: message
            })

                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {

        }
    }
    return (
        <>
            <div>
                <HeadetForBrand />
                <div id='creator_bgcolor' data-aos="fade-up">
                    <div>
                        <h2 id='creator_h2'>Contect Us</h2>
                    </div>
                    <div>
                        <p id='creator_content'>
                            Got questions about our platform or need help with <br /> your account?We're here for you!
                        </p>
                    </div>
                </div>

                <div >
                    <div className="row" data-aos="flip-left">
                        <div className="col-6" id='creator_form'>
                            <form action="">
                                <div>
                                    <input type="text" placeholder='First Name' id='form' value={first_name} onChange={(e) => { setfirst_name(e.target.value) }} required />
                                    <input type="text" placeholder='Last Name' id='c_form' value={last_name} onChange={(e) => { setlast_name(e.target.value) }} required />
                                </div>
                                <div>
                                    <input type='email' placeholder='Email' id='mail' value={mail} onChange={(e) => { setmail(e.target.value) }} required />
                                </div>
                                
                                <div>
                                    <input type='text' placeholder='Company Name' id='mail' value={company_name} onChange={(e) => { setcompany_name(e.target.value) }} required />
                                </div>
                                <div>
                                    <input type='text' placeholder='Company Website' value={company_website} id='mail' onChange={(e) => { setcompany_website(e.target.value) }} required />
                                </div>
                                <div>
                                    <input type='text' placeholder='Company Phone' value={company_phone} id='mail' onChange={(e) => { setcompany_phone(e.target.value) }} required maxLength={10} />
                                </div>
                                <div>
                                    <textarea name="" id="" cols="30" rows="10" className='txtarea' placeholder='Enter your message' value={message} onChange={(e) => { setmessage(e.target.value) }} required></textarea>
                                </div>
                                <div>
                                    <button id='creator_submit' onClick={() => { Submit_button() }}>Submit</button>
                                </div>
                            </form>
                        </div>

                        <div className="col-6">
                            <img src={require('./Image/18.png')} id='cre_content'></img>
                        </div>
                    </div>
                </div>
                <div id='cre_footer'>
                    <Footer />
                </div>
            </div>  </>
    )
}

export default Brand_Contect