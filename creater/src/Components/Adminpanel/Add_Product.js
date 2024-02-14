import axios from "axios";
import React, { useState } from "react";
import Footer from "./Footer";
import Headers from "./Headers";
import Sidemenu from "./Sidemenu";

const Add_Product = () => {
  const [product_title, setproduct_title] = useState("");
  const [product_discription, setproduct_discription] = useState("");
  const [product_price, setproduct_price] = useState("");
  const [product_imgurl, setproduct_imgurl] = useState("");
  let userId = localStorage.getItem("userId");

  const addProduct = () => {
    axios
      .post("http://localhost:5000/product/createproduct", {
        product_imgurl: product_imgurl,
        product_title: product_title,
        product_discription: product_discription,
        product_price: product_price,
      })
      .then((response) => {
        let data = response.data;
        if (data._id != "") {
          setproduct_title("");
          setproduct_discription("");
          setproduct_price("");
          setproduct_imgurl("");
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="wrapper bg-white">
        <Headers />
        <Sidemenu />
        <div className="content-wrapper">
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6 m-auto">
                  <h1>Add Product</h1>
                </div>
              </div>
            </div>
          </section>
          <section className="content">
            <div className="row">
              <div className="col-md-6 m-auto">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">General</h3>
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
                      <label htmlFor="inputimage">Product URL</label>
                      <input
                        type="text"
                        id="inputimage"
                        className="form-control"
                        value={product_imgurl}
                        onChange={(e) => {
                          setproduct_imgurl(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputName">Product Name</label>
                      <input
                        type="text"
                        id="inputName"
                        className="form-control"
                        value={product_title}
                        onChange={(e) => {
                          setproduct_title(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputDescription">
                        Product Description
                      </label>
                      <textarea
                        id="inputDescription"
                        className="form-control"
                        rows={4}
                        value={product_discription}
                        onChange={(e) => {
                          setproduct_discription(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputStatus">Product Price</label>
                      <input
                        type="number"
                        id="inputStatus"
                        className="form-control"
                        value={product_price}
                        onChange={(e) => {
                          setproduct_price(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 m-auto">
                <a className="btn btn-success mb-3" onClick={addProduct}>
                  Add Product
                </a>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Add_Product;
