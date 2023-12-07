import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function Path() {
  return (
    <>
      <nav
        className="navbar navbar-light bg-light"
        style={{ fontFamily: "serif" }}
      >
        <div
          className="container-fluid"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="leftNav">
            <Link
              className="navbar-brand"
              to="/MainGreenHome"
              style={{ color: "green" }}
            >
              <i className="fa fa-pagelines fa-2x" style={{ color: "green" }} />
              &nbsp;GreenPoint
            </Link>
          </div>
          {/* <div className="rightNav">
            <button
              className="btn btn-dar text-light"
              style={{ backgroundColor: "green" }}
            >
              <i className="fa fa-dollar" />
              &nbsp; unlimited point
            </button>
          </div> */}
        </div>
      </nav>

      <div className="ChoosePath mx-auto mt-5" style={{ display: "flex" , flexDirection: "column" , justifyContent: "center"}}>
        <Link to="/GreenPointUploadProductsPage" className="list-style-none text-decoration-none m-2">
        <div className="path1 border border-light shadow rounded p-3 bg-info my-1">
          <p className="text-dark text-lead fs-4 text-center">
            Upload Products
          </p>
        </div>
        </Link>
        <Link to="/SeeOrder" className="list-style-none text-decoration-none m-2">
        <div className="path2 border border-light shadow rounded p-3 bg-info mb-2">
          <p className="text-dark text-lead fs-4 text-center">
            Coming Orders
          </p>
        </div>
        </Link>
      </div>

      <p className="m-2 mt-3 small" style={{ color: "#d900ff" }}>
            &copy; copyright 2023 All Right Reserved | Green Point
      </p>
    </>
  );
}

export default Path;
