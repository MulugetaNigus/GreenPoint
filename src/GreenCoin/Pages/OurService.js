import React from "react";
import { FcPositiveDynamic } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { FcShipped } from "react-icons/fc";
import { FcPaid } from "react-icons/fc";

import { FcCheckmark } from "react-icons/fc";

function OurService() {
  return (
    <>
            
    <p className="text-center mb-3 fs-2 mt-5 bg-warning w-100 rounded p-2">
      Our <span className="text-success">Services&nbsp;</span>
      <FcPaid className="display-1" />
    </p>

      <div
        className="row m-2 mt-2 mx-auto"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          gap: "5px",
        }}
      >

        <div className="col-md-4 rounde"
        // style={{
        //   backgroundColor: "lightgray"
        // }}
        >
          <p className="display-1">
            <FcApproval />
          </p>
             <h3>easy to Order</h3>
        </div>
        <div className="col-md-3 my-3 rounded"
        // style={{
        //    backgroundColor: "lightgray"
        // }}
        >
          <p className="display-1">
            <span className=""><FcShipped /></span>
          </p>
          <h3 className="">Fast Delivery</h3>
        </div>
        <div className="col-md-4 rounde" 
        // style={{
        //   backgroundColor: "lightgray"
        // }}
        >
          <p className="display-1">
            <FcPositiveDynamic />
          </p>
          <h3>Quality Foods </h3>
        </div>
      </div>
    </>
  );
}

export default OurService;
