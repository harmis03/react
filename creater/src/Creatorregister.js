import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Creatorregister = () => {
    const [creator_name, setcreator_name] = useState("");
    const [email, setemail] = useState("");
    const [mobilenumber, setmobilenumber] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

     localStorage.setItem("creator_name",creator_name)
     localStorage.setItem("c_email",email);
     localStorage.setItem("c_mobilenumber",mobilenumber);
     localStorage.setItem("c_password",password);

    const creatorRegister = () => {
        if (
            creator_name !== "" &&
            email !== " " &&
            mobilenumber !== "" &&
            password !== ""
        ) {
            axios
                .post("http://localhost:5000/Creator/Creatorregister", {
                    creator_name: creator_name,
                    email: email,
                    mobilenumber: mobilenumber,
                    password: password,
                })
                .then((response) => {
                    let data = response.data;
                    console.log(data);
                    if (data._id !== undefined) {
                        toast.success(' Register Successfully !', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                        navigate("/Creatorlogin");
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            toast.error('Please Fill The All Boxes !', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };
    return (
        <>
            <div>
                <ToastContainer />
            </div>
            <div id="admin">
                <div className="admin_bg">
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <title>Log in</title>
                    <link rel="stylesheet" href="./css/style.css" />
                    <div className="box_2">
                        <div className="form">
                            <h2>SIGN UP</h2>
                            <div className="inputBox">
                                <input
                                    type="text"
                                    value={creator_name}
                                    onChange={(e) => {
                                        setcreator_name(e.target.value);
                                    }}
                                    required
                                />
                                <span>Creator_Name</span>
                                <i />
                            </div>
                            <div className="inputBox">
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => {
                                        setemail(e.target.value);
                                    }}
                                />
                                <span>Email:</span>
                                <i />
                            </div>
                            <div className="inputBox">
                                <input
                                    type="text"
                                    minLength={10}
                                    maxLength={10}
                                    required
                                    value={mobilenumber}
                                    onChange={(e) => {
                                        setmobilenumber(e.target.value);
                                    }}
                                />
                                <span>Mobile Number:</span>
                                <i />
                            </div>
                            <div className="inputBox">
                                <input
                                    type="password"
                                    value={password}
                                    required
                                    onChange={(e) => {
                                        setpassword(e.target.value);
                                    }}
                                />
                                <span>Password:</span>
                                <i />
                            </div>
                            <div className="links">
                                <Link to="/Creatorregister">Forgot Password ? </Link>
                                <Link to="/Creatorlogin">Login</Link>
                            </div>
                            <input
                                type="button"
                                defaultValue="Sign Up"
                                onClick={() => {
                                    creatorRegister();
                                }}
                                className="admin_button"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Creatorregister