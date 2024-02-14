import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Sidemenu from './Sidemenu';
import Footer from './Footer';
import Headers from './Headers';

const Update_brand = () => {
  const Naviagte = useNavigate();

  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [email, setemail] = useState('');
  const [company_name, setcompany_name] = useState('');
  const [company_website, setcompany_website] = useState('');
  const [company_phone, setcompany_phone] = useState('');
  const [message, setmessage] = useState('');

  let Brandcontact_id = localStorage.getItem("BrandcontactId")

  useEffect(() => {
    axios
      .put(`http://localhost:5000/Brand_contact/update_brand/${Brandcontact_id}`)

      .then((response) => {
        let branddata = response.data;

        setfirst_name(branddata.first_name);
        setlast_name(branddata.last_name);
        setemail(branddata.email);
        setcompany_name(branddata.company_name);
        setcompany_website(branddata.company_website);
        setcompany_phone(branddata.company_phone);
        setmessage(branddata.message);
      })
      .catch((error) => {
        console.log(error)
      });
  }, []);

  const brandupdate = () => {
    axios
      .put(`http://localhost:5000/Brand_contact/update_brand/${Brandcontact_id}`, {
        first_name: first_name,
        last_name: last_name,
        email: email,
        company_name: company_name,
        company_website: company_website,
        company_phone: company_phone,
        message: message
      })
      .then((response) => {
        console.log(response.data)
        Naviagte('/View_brand');
      })
      .catch((error) => {
        console.log(error);
      });

    setfirst_name("");
    setlast_name("");
    setemail("");
    setcompany_name("");
    setcompany_website("");
    setcompany_phone("");
    setmessage("");
    localStorage.removeItem("BrandcontactId");
    Naviagte("/Brand_add")
  }

  const brand_reset = () => {
    setfirst_name("");
    setlast_name("");
    setemail("");
    setcompany_name("");
    setcompany_website("");
    setcompany_phone("");
    setmessage("");

    localStorage.removeItem("BrandcontactId");
    Naviagte("/Brand_add")
  }
  return (
    <>
      <ToastContainer />
      <div className="wrapper bg-white">
        <Headers />
        <Sidemenu />
        <div className="card card-info content-wrapper">
          <div className="card-header">
            <h3 className="card-title">CREATOR'S FORM</h3>
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
                    value={first_name}
                    onChange={(e) => { setfirst_name(e.target.value) }}
                    className="form-control"
                    placeholder="First_Name"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  // htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label"
                >
                  Last_Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    value={last_name}
                    onChange={(e) => { setlast_name(e.target.value) }}
                    className="form-control"
                    placeholder="Last_Name"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  // htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label"
                >
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setemail(e.target.value) }}
                    className="form-control"
                    placeholder="Company_website"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  // htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label"
                >
                  Company_name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    value={company_name}
                    onChange={(e) => { setcompany_name(e.target.value) }}
                    className="form-control"
                    placeholder="Company_name"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  // htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label"
                >
                  Company_website
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    value={company_website}
                    onChange={(e) => { setcompany_website(e.target.value) }}
                    className="form-control"
                    placeholder="Company_website"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  // htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label"
                >
                  Company_phone
                </label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    maxLength='10'
                    value={company_phone}
                    onChange={(e) => { setcompany_phone(e.target.value) }}
                    className="form-control"
                    placeholder="Email"
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
                    value={message}
                    onChange={(e) => { setmessage(e.target.value) }}
                    className="form-control"
                    id="inputPassword3"
                    placeholder="Message"
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
              <button type="submit" className="btn btn-info" onClick={brandupdate}>
                Update
              </button>
              <button type="Submit" className="btn btn-info" onClick={brand_reset} id='reset'>
                Reset
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
    </>
  )
}

export default Update_brand