import React from "react";
import { FcPositiveDynamic } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { FcShipped } from "react-icons/fc";
import { FcPaid } from "react-icons/fc";

import { FcAlarmClock } from "react-icons/fc";

import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";

function PopularMenu({ FoodImg, FoodName, FoodPrice }) {
  const navigate = useNavigate();
  const handleOrder = () => {
    navigate("/Store");
  };

  return (
    <>
      {/* <div className="row mt-3"> */}
      <div className="card m-2">
        <img src={FoodImg} alt="foodimg" className="img-fluid card-img-top" />
        <div className="card-body bg-dark">
          <div className="desc d-flex align-items-center justify-content-between">
            <p className="fs-2 text-lead text-success fw-light">{FoodName}</p>
            <p className="text-lead text-danger fs-5">{FoodPrice} ETB</p>
          </div>

          <div className="desc d-flex align-items-center justify-content-between">
            <p className="fs-5 text-warning">
              <span className="fs-6">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </span>{" "}
              3.5
            </p>
            <p className="fs-5 text-warning">
              <span className="fs-5">
              <FcAlarmClock />{" "}
              </span>
              15 - 25 min
            </p>
          </div>

          <button
            onClick={handleOrder}
            className="btn btn-outline-warning w-100 btn-lg stretched-link"
          >
            Order Now
          </button>
        </div>
      </div>

      {/* </div> */}
    </>
  );
}

export default PopularMenu;
