import React from "react";
import { Link } from "react-router-dom";
import { BiCategoryAlt } from "react-icons/bi";
import {
  BsFillBagPlusFill,
  BsCartPlusFill,
  BsFillEyeFill,
} from "react-icons/bs";

const Sidemenu = () => {
  const userName = localStorage.getItem("userName");
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="index3.html" className="brand-link">
          <img
            src="dist/img/2.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light display">
            Creator
          </span>
        </a>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">

              <img
                src="dist/img/3.png"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <Link href="#" className="d-block display">
                {userName}
              </Link>
            </div>
          </div>
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div>
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-table" />
                  <p>
                    <Link to="/View_creator" className="display">
                      View_creator
                    </Link>
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-table" />
                  <p>
                    <Link to="/View_brand" className="display">
                      View_brand
                    </Link>
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-table" />
                  <p>
                    <Link to="/Add_collabration" className="display">
                      Add_collabation
                    </Link>
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link d-flex align-items-center">
                  <span className=" d-flex align-items-center fs-5  me-2 ms-1">
                    <BsFillBagPlusFill />
                  </span>
                  <p>
                    Category
                    <i className="fas fa-angle-left right align-items-center" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link d-flex align-items-center"
                    >
                      <span className=" d-flex align-items-center fs-5  me-2 ms-1">
                        <BiCategoryAlt />
                      </span>
                      <Link to="/Brand_add" className="display">
                        Add Brand
                      </Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link d-flex align-items-center"
                    >
                      <span className=" d-flex align-items-center fs-5  me-2 ms-1">
                        <BiCategoryAlt />
                      </span>
                      <Link to="/Add_creator" className="display">
                        Add Creators
                      </Link>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <p>
                  <span style={{ margin: "10px" }}>
                    <i className="fas fa-angle-left left" />
                    <Link to="/" className="display" id="lnk">
                      Log Out
                    </Link>
                  </span>
                </p>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidemenu;
