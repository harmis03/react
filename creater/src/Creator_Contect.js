import React, { useState } from 'react'
import './Creator_contact.css'
import Header from './Header'
import Footer from './Footers'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HeaderForCreator from './HeaderForCreator';

const Creator_Contect = () => {

  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const navigate = useNavigate();


  const Submit = () => {
    if (
      first_name !== "" &&
      last_name !== " " &&
      email !== "" &&
      message !== ""
    ) {
      axios
        .post("http://localhost:5000/Contect/Form", {
          first_name: first_name,
          last_name: last_name,
          email: email,
          message: message,
        })
        .then((response) => {
          let data = response.data;
          console.log(data);
          if (data._id !== undefined) {
            navigate("/Creator_Contect");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
    }
  };
  return (
    <>
      <div>
        <HeaderForCreator />
        <div id='creator_bgcolor' data-aos="fade-up">
          <div>
            <h2 id='creator_h2' className='wishme'>Contect Us</h2>
          </div>
          <div>
            <p id='creator_content'>
              Got questions about our platform or need help with <br /> your account?We're here for you!
            </p>
          </div>
        </div>

        <div>
          <div className="row" data-aos="flip-left">
            <div className="col-6" id='creator_form'>
              <form action="#">
                <div>
                  <input type="text" placeholder='First Name' id='form' value={first_name} onChange={(e) => { setfirst_name(e.target.value) }} required />
                  <input type="text" placeholder='Last Name' id='c_form' value={last_name} onChange={(e) => { setlast_name(e.target.value) }} required />
                </div>
                <div>
                  <input type='email' placeholder='Email' id='mail' value={email} onChange={(e) => { setemail(e.target.value) }} required />
                </div>
               
                <div>
                  <textarea name="" id="" cols="30" rows="10" className='txtarea' placeholder='Enter your message' value={message} onChange={(e) => { setmessage(e.target.value) }} required></textarea>
                </div>
                <div>
                  <button id='creator_submit' onClick={() => { Submit() }}>Submit</button>
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
      </div>
    </>
  )
}

export default Creator_Contect