import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Brandlogin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const brandlogin = () => {
    if (email !== "" && password !== "") {
      axios
        .post("http://localhost:5000/Brandlogin/Brandlogins", {
          email: email,
          password: password,
        })
        .then((response) => {
          let data = response.data;
          console.log(data);
          if (data._id !== undefined) {
            navigate("/Brand_home");
          } else {
            toast.error(" Please Enter Valid Email Or Password!", {
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
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      toast.error(" Please Enter Email Or Password!", {
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
          <title>Log In</title>
          <link rel="stylesheet" href="./css/style.css" />
          <div className="box">
            <div className="form">
              <h2>SIGN IN</h2>
              <div className="inputBox">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  required
                />
                <span>Email/Mobilenumber</span>
                <i />
              </div>
              <div className="inputBox">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  required
                />
                <span>Password</span>
                <i />
              </div>
              <div className="links">
                <Link to="/Brandregister">Forgot Password ? </Link>
                <Link to="/Brandregister">Sign Up</Link>
              </div>
              <input
                type="button"
                defaultValue="Login"
                className="admin_button"
                onClick={() => {
                  brandlogin();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Brandlogin