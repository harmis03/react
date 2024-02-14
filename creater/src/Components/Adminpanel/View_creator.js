import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Headers from "./Headers";
import Sidemenu from "./Sidemenu";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash,faPenToSquare} from '@fortawesome/free-solid-svg-icons'

const View_creator = () => {

  const [Contect, setContect] = useState([]);
  let navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:5000/Contect/Getcontect_creator')

      .then((response) => {

        let data = response.data

        setContect(data)
      })

      .catch((error) => {
        console.log(error)
      });

  }, []);

  const Editcreator =  (Contect_id) =>{
    localStorage.setItem("ContectId", Contect_id);
    navigate('/Update_creator')
  }

  const Delete_button = (Contect_id) => {
    axios.delete(`http://localhost:5000/Contect/Delete_creator/${Contect_id}`)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
    console.log(Contect_id)
  }


  return (
    <div className="wrapper bg-white">
      <Headers />
      <Sidemenu />
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>DataTables</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">DataTables</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">
                      CREATER'S DATA
                    </h3>
                  </div>
                  <div className="card-body">
                    <table
                      id="example1"
                      className="table table-bordered table-striped"
                    >
                      <thead>
                        <tr>
                          <th>First_Name</th>
                          <th>Last_Name</th>
                          <th>Email</th>
                          <th>Message</th>
                          <th></th>
                        </tr>
                      </thead>

                      {Contect.map((item, index) => {
                        return (
                          <>
                            <tbody key={index}>
                              <tr>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td>
                                <td>{item.message}</td>
                                 <td><a href="View_creator"><FontAwesomeIcon icon={faTrash} onClick={()=>Delete_button(item._id)} className="bg-danger" id="red"/></a></td> 
                                 <td><FontAwesomeIcon icon={faPenToSquare} onClick={()=>Editcreator(item._id)} className="bg-blue" id="blue"><Link to='/Update_creator'/></FontAwesomeIcon></td>  
                              </tr>
                            </tbody>
                          </>
                        );
                      })}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default View_creator;
