import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Headers from "./Headers";
import Sidemenu from "./Sidemenu";
import { ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Update_creator = () => {
    const Naviagte = useNavigate();

    const [first_name, setfirst_name] = useState('');
    const [last_name, setlast_name] = useState('');
    const [email, setemail] = useState('');
    const [message, setmessage] = useState('');

    let Contect_id = localStorage.getItem("ContectId")

    useEffect(() => {
        axios
            .put(`http://localhost:5000/Contect/Update_creator/${Contect_id}`)

            .then((response) => {
                let creatordata = response.data;

                setfirst_name(creatordata.first_name);
                setlast_name(creatordata.last_name);
                setemail(creatordata.email);
                setmessage(creatordata.message);
            })
            .catch((error) => {
                console.log(error)
            });
    }, []);

    const updateCreator = () => {
        axios
            .put(`http://localhost:5000/Contect/Update_creator/${Contect_id}`, {
                first_name: first_name,
                last_name: last_name,
                email: email,
                message: message
            })
            .then((response) => {
                console.log(response.data)
                Naviagte('/View_creator');
            })
            .catch((error) => {
                console.log(error);
            });

            setfirst_name("");
            setlast_name("");
            setemail("");
            setmessage("");
            localStorage.removeItem("ContectId");
            Naviagte("/Add_creator")
    }

    const reset_creator = () => {
        setfirst_name("");
        setlast_name("");
        setemail("");
        setmessage("");

        localStorage.removeItem("ContectId");
        Naviagte("/Add_creator")
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
                            <button type="submit" className="btn btn-info" onClick={updateCreator}>
                                Update
                            </button>
                            <button type="Submit" className="btn btn-info" onClick={reset_creator} id='reset'>
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

export default Update_creator