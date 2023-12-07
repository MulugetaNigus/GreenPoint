import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import burger from "./R.png";
import { Link } from "react-router-dom";
import { FaRegPaperPlane } from "react-icons/fa";
import delivery from "../Assets/food-easyeats-app.gif";

function Banner() {
  return (
    <>
      <div className="row p-4" id="GreenPointBanner">
        <div
          className="col-md-6 mx-auto text-center"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p  id="moveMe" className="text-light display-6 mt-5" style={{ fontFamily: "" }}>
            <span className="display-1 fw-bold text-info" style={{ color: "" }} >
              Beyond
            </span>{" "}
            the traditional way,{" "}
            <span className="text-warning fw-bold display-4">we</span> start
            amazing here
            <br />
            {/* <img src={delivery} alt="delivery-boy" className="img-fluid w-75" /> */}
            {/* <span className="display-4">&#128561;</span> */}
          </p>
          <q className="fs-1 my-2 text-light fw-light">
            Eat well, save money, with our free food service.
          </q>
          <Link to="/Store">
            <button className="btn btn-outline-warning w-100 mt-2 p-2 fw-bold">
              Order Now &nbsp; <FaRegPaperPlane />
            </button>
          </Link>
        </div>
        {/* <div className="col-md-6 mt-5" id="burgerImg">
          <img src={burger} alt="banner" className="img-fluid" />
        </div> */}
      </div>
    </>
  );
}

export default Banner;
