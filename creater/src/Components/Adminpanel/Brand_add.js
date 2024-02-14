import axios from "axios";
import React, { useState } from "react";
import Footer from "./Footer";
import Headers from "./Headers";
import Sidemenu from "./Sidemenu";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

const Brand_add = () => {

  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [email, setemail] = useState('');
  const [company_name, setcompany_name] = useState('');
  const [company_website, setcompany_website] = useState('');
  const [company_phone, setcompany_phone] = useState('');
  const [message, setmessage] = useState('');


  const Submit_button = () => {
    if (first_name !== "" &&
      last_name !== "" &&
      email !== "" &&
      company_name !== "" &&
      company_website !== "" &&
      company_phone !== "" &&
      message !== ""
    ) {
      axios.post("http://localhost:5000/Brand_contact/Contect_brand", {
        first_name: first_name,
        last_name: last_name,
        email: email,
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
        <ToastContainer />
        <div className="wrapper bg-white">
          <Headers />
          <Sidemenu />
          <div className="card card-info content-wrapper">
            <div className="card-header">
              <h3 className="card-title">BRAND'S FORM</h3>
            </div>
            <form className="form-horizontal">
              <div className="card-body">
                <div className="form-group row">
                  <label
                    // htmlFor="inputEmail3"
                    className="col-sm-2 col-form-label"
                  >
                    First_Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First_Name"
                      value={first_name}
                      onChange={(e) => { setfirst_name(e.target.value) }}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-sm-2 col-form-label"
                  >
                    Last_Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last_Name"
                      value={last_name}
                      onChange={(e) => { setlast_name(e.target.value) }}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-sm-2 col-form-label"
                  >
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => { setemail(e.target.value) }}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-sm-2 col-form-label"
                  >
                    Company_Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company_Name"
                      value={company_name}
                      onChange={(e) => { setcompany_name(e.target.value) }}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-sm-2 col-form-label"
                  >
                    Company_Website
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company_Website"
                      value={company_website}
                      onChange={(e) => { setcompany_website(e.target.value) }}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-sm-2 col-form-label"
                  >
                    Company_Phone
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company_Phone"
                      value={company_phone}
                      maxLength={10}
                      onChange={(e) => { setcompany_phone(e.target.value) }}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputPassword3"
                    className="col-sm-2 col-form-label"
                  >
                    Message
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword3"
                      placeholder="Message"
                      value={message}
                      onChange={(e) => { setmessage(e.target.value) }}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="offset-sm-2 col-sm-10">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck2"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button
                  type="submit"
                  className="btn btn-info"
                  onClick={() => { Submit_button() }} >
                    Submit
                </button>
                <button
                  type="submit"
                  className="btn btn-default float-right"
                >
                  <Link to='/Admin' id="lnk">Cancel</Link>
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Brand_add;