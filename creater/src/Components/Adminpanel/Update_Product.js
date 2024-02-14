import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Headers from "./Headers";
import Sidemenu from "./Sidemenu";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const Update_Product = () => {
  let navigate = useNavigate();
  const [product_imgurl, setProduct_Imgurl] = useState("");
  const [product_title, setProduct_Title] = useState("");
  const [product_discription, setProduct_Discription] = useState("");
  const [product_price, setProduct_Price] = useState("");

  // get id using useLocation();
  // let location = useLocation();
  // let product_id = location.state.product_id;

  let product_id = localStorage.getItem("productId");

  useEffect(() => {
    axios
      .put(`http://localhost:5000/product/updateproduct/${product_id}`)
      .then((response) => {
        // console.log(response.data);
        let productData = response.data;
        setProduct_Imgurl(productData.product_imgurl);
        setProduct_Title(productData.product_title);
        setProduct_Discription(productData.product_discription);
        setProduct_Price(productData.product_price);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const updateProduct = () => {
    axios
      .put(`http://localhost:5000/product/updateproduct/${product_id}`, {
        product_imgurl: product_imgurl,
        product_title: product_title,
        product_discription: product_discription,
        product_price: product_price,
      })
      .then((response) => {
        console.log(response.data);
        navigate("/Viewproduct");
      })
      .catch((error) => {
        console.log(error);
      });
    setProduct_Imgurl("");
    setProduct_Title("");
    setProduct_Discription("");
    setProduct_Price("");
    localStorage.removeItem("productId");
  };

  const resetProduct = () => {
    setProduct_Imgurl("");
    setProduct_Title("");
    setProduct_Discription("");
    setProduct_Price("");
    localStorage.removeItem("productId");
    navigate('/Addproduct')
  }

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
                  <h1>Update Product</h1>
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
                      <label htmlFor="inputimage">Product Image URL :</label>
                      <input
                        type="text"
                        id="inputimage"
                        className="form-control"
                        value={product_imgurl}
                        onChange={(e) => {
                          setProduct_Imgurl(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputName">Product Title :</label>
                      <input
                        type="text"
                        id="inputName"
                        className="form-control"
                        value={product_title}
                        onChange={(e) => {
                          setProduct_Title(e.target.value);
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
                        rows={3}
                        value={product_discription}
                        onChange={(e) => {
                          setProduct_Discription(e.target.value);
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
                          setProduct_Price(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-md-6 m-auto text-end">
                <a className="btn btn-success mb-3" onClick={updateProduct}>
                  Update
                </a>
              </div>
              <div className="col-6 col-md-6 m-auto">
                <a className="btn btn-danger mb-3" onClick={resetProduct}>
                  Reset
                </a>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>{" "}
    </>  
  );
};

export default Update_Product;
