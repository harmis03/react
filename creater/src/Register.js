import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [mobilenumber, setmobilenumber] = useState("");
  const [password, setpassword] = useState("");
  // const [first, setfirst] = useState(false);
  const navigate = useNavigate();

  const Register = () => {
    if (
      name !== "" &&
      email !== " " &&
      mobilenumber !== "" &&
      password !== ""
    ) {
      axios
        .post("http://localhost:5000/login_register/register", {
          name: name,
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
            navigate("/login");
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
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  required
                />
                <span>Username</span>
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
                <Link to="/register">Forgot Password ? </Link>
                <Link to="/login">Login</Link>
              </div>
              <input
                type="button"
                defaultValue="Sign Up"
                onClick={() => {
                  Register();
                }}
                className="admin_button"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;  