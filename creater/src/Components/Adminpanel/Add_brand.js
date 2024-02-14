import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Headers from "./Headers";
import Sidemenu from "./Sidemenu";
import { ToastContainer, toast } from "react-toastify";

const Add_brand = () => {
  const [subCategoryname, setSubCategoryname] = useState("");
  const [selectCategoryName, setSelectCategoryName] = useState([]);
  const [category, setCategory] = useState("");
  const [selectSubCategoryName, setSelectSubCategoryName] = useState([]);
  const [brandName, setBrandName] = useState("");

  const addBrand = () => {
    if (brandName !== "") {
      axios
        .post("http://localhost:5000/Brandname/createBrand", {
          Categoryname: category,
          subCategoryname: subCategoryname,
          Brand_Name: brandName,
        })
        .then((res) => {
          let data = res.data;
          console.log(data);
          setBrandName("");
          toast.success(" Brand Add Successfully !", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      toast.error("Please Fill All Boxes !", {
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
  useEffect(() => {
    axios
      .get("http://localhost:5000/category/getallcategory")
      .then((res) => {
        let data = res.data;
        console.log(data);
        setSelectCategoryName(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/subcategory/getallsubcategory")
      .then((res) => {
        let data = res.data;
        console.log(data);
        setSelectSubCategoryName(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <ToastContainer />
      <div className="wrapper bg-white">
        <Headers />
        <Sidemenu />
        <div className="content-wrapper">
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2 text-center">
                <div className="col-sm-6 m-auto">
                  <h1>"Add Your Product Sub Category"</h1>
                </div>
              </div>
            </div>
          </section>
          <section className="content">
            <div className="row">
              <div className="col-md-6 m-auto">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Product Category</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                        title="Collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="inputName">Category Name :</label>
                      <select
                        className="form-control"
                        value={category}
                        onChange={(e) => {
                          setCategory(e.target.value);
                        }}
                      >
                        <option
                          className="text-center text-dark"
                          selected={"selected"}
                          hidden
                        >
                          --------Select Categoryname--------
                        </option>
                        {selectCategoryName.map((item, index) => {
                          return (
                            <option
                              key={index}
                              // value={Categoryname}
                              className="nav-item"
                            >
                              {item.Categoryname}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="inputName">Sub Category Name :</label>
                      <select
                        className="form-control"
                        value={subCategoryname}
                        onChange={(e) => {
                          setSubCategoryname(e.target.value);
                        }}
                      >
                        <option
                          className="text-center text-dark"
                          selected={"selected"}
                          hidden
                        >
                          --------Select SubCategoryname--------
                        </option>
                        {selectSubCategoryName.map((item, index) => {
                          return (
                            <option
                              key={index}
                              // value={subcategory}
                              className="nav-item"
                            >
                              {item.subCategoryname}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputName">Brand Name :</label>
                      <input
                        type="text"
                        id="inputName"
                        className="form-control"
                        value={brandName}
                        onChange={(e) => {
                          setBrandName(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 m-auto text-center">
                <a className="btn btn-success mb-3" onClick={addBrand}>
                  Add Brand
                </a>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Add_brand;
