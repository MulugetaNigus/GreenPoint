import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import truck from '../Assets/easyeats-rider-easyeats.gif';
import { FaTelegramPlane } from 'react-icons/fa';
import { FcOnlineSupport } from 'react-icons/fc';
import { FcApproval } from 'react-icons/fc';

function OrderConfirmation() {

  return (
    <>
      <div className="row m-2">
        <div
          className="col-md-5 mx-auto border border-lighter rounded shadow p-3"
          style={{
            marginTop: "220px",
            backgroundColor: "green",
            fontFamily: "serif",
          }}
        >
          <p className="text-lead fs-3 text-light text-center my-3">
            <h1 className="display-1">Thanks <FcApproval className="display-1"/></h1>
            <br />
            Your Order Has Been Submitted SuccesFully &nbsp;
            {/* < FaTelegramPlane className="display-5"/> */}
          </p>
          <p className="text-lead fs-4 text-warning mb-3">
            We'll Call You Now <FcOnlineSupport className="display-1"/>
          </p>
          <Link to="/Store">
            <button className="btn btn-warning w-100">
              <i className="fa fa-thumbs-up" /> Confirm
            </button>
          </Link>
        </div>
        {/* <div className="col-md-6 mt-5">
            <img src={truck} alt="delivery-boy" className="img-fluid" />
        </div> */}
      </div>
    </>
  );
}

export default OrderConfirmation;