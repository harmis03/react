import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Footer from './Footer'
import Headers from './Headers'
import Sidemenu from './Sidemenu'

const Add_collabration = () => {

  const [image, setimage] = useState('');
  const [collab_name, setcollab_name] = useState('');
  const [collab_content, setcollab_content] = useState('');
  const [payment, setpayment] = useState('');
  const [followers, setfollowers] = useState('');
  const [engagement, setengagement] = useState('');
  const [min_age, setmin_age] = useState('');
  const [max_age, setmax_age] = useState('');
  const [residence, setresidence] = useState('');
  const [Compensation, setCompensation] = useState('');
  const [Campaign_Description, setCampaign_Description] = useState('');
  const [Deliverables,setDeliverables] = useState('');

  const button = () => {
    if (
      image !== "" &&
      collab_name !== "" &&
      collab_content !== "" &&
      payment !== "" &&
      followers !== "" &&
      engagement !== "" &&
      min_age !== "" &&
      max_age !== "" &&
      residence !== "" &&
      Compensation !== "" &&
      Campaign_Description !== "" &&
      Deliverables !== ""

    ) {
      axios.post("http://localhost:5000/Collabration/collab_form", {
        image: image,
        collab_name: collab_name,
        collab_content: collab_content,
        payment: payment,
        followers: followers,
        engagement: engagement,
        min_age: min_age,
        max_age: max_age,
        residence: residence,
        Compensation:Compensation,
        Campaign_Description:Campaign_Description,
        Deliverables:Deliverables
      })
        .then((response) => {
          console.log(response)
        })

        .catch((error) => {
          console.log(error)
        })
    }
    else {

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
              <h3 className="card-title">COLLABRATION'S FORM</h3>
            </div>
            <form className="form-horizontal">
              <div className="card-body">
                <div className="form-group row">
                  <label
                    // htmlFor="inputEmail3"
                    className="col-sm-2 col-form-label"
                  >
                    Image_url
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Image_url"
                      value={image}
                      onChange={(e) => { setimage(e.target.value) }}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    // htmlFor="inputEmail3"
                    className="col-sm-2 col-form-label"
                  >
                    Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      value={collab_name}
                      onChange={(e) => { setcollab_name(e.target.value) }}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    // htmlFor="inputEmail3"
                    className="col-sm-2 col-form-label"
                  >
                    Content
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Content"
                      value={collab_content}
                      onChange={(e) => { setcollab_content(e.target.value) }}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    // htmlFor="inputEmail3"
                    className="col-sm-2 col-form-label"
                  >
                    Payment
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Payment"
                      value={payment}
                      onChange={(e) => { setpayment(e.target.value) }}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputPassword3"
                    className="col-sm-2 col-form-label"
                  >
                    Followers
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword3"
                      placeholder="Followers"
                      value={followers}
                      onChange={(e) => { setfollowers(e.target.value) }}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputPassword3"
                    className="col-sm-2 col-form-label"
                  >
                    Engagement
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword3"
                      placeholder="Engagement"
                      value={engagement}
                      onChange={(e) => { setengagement(e.target.value) }}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputPassword3"
                    className="col-sm-2 col-form-label"
                  >
                    Min_Age
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword3"
                      placeholder="Min_Age"
                      value={min_age}
                      onChange={(e) => { setmin_age(e.target.value) }}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputPassword3"
                    className="col-sm-2 col-form-label"
                  >
                    Max_Age
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword3"
                      placeholder="Max_Age"
                      value={max_age}
                      onChange={(e) => { setmax_age(e.target.value) }}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputPassword3"
                    className="col-sm-2 col-form-label"
                  >
                    Residence
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword3"
                      value={residence}
                      onChange={(e) => {setresidence(e.target.value) }}
                      placeholder="Recidence"
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputPassword3"
                    className="col-sm-2 col-form-label"
                  >
                    Compensation
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword3"
                      value={Compensation}
                      onChange={(e) => { setCompensation(e.target.value) }}
                      placeholder="Compensation"
                      required
                      minLength="50"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputPassword3"
                    className="col-sm-2 col-form-label"
                  >
                    Campaign Description
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword3"
                      value={Campaign_Description}
                      onChange={(e) => { setCampaign_Description(e.target.value) }}
                      placeholder="Campaign Description"
                      required
                      minLength="50"

                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputPassword3"
                    className="col-sm-2 col-form-label"
                  >
                    Deliverables
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword3"
                      value={Deliverables}
                      onChange={(e) => { setDeliverables(e.target.value) }}
                      placeholder="Deliverables"
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
                <button type="submit" className="btn btn-info" onClick={() => { button() }}>
                  Submit
                </button>
                <button
                  type="submit"
                  className="btn btn-default float-right"
                >
                  <Link to='/Admin' id='lnk'>Cancel</Link>
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Add_collabration