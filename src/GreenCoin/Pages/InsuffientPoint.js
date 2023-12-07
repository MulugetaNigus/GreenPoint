import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'

function InsuffientPoint({ StoreData }) {
  return (
    <>
      <div className="row m-2">
        <div
          className="col-md-4 mx-auto border border-none rounded shadow-lg p-3"
          style={{
            marginTop: "120px",
            backgroundColor: "gold",
            fontFamily: "serif",
          }}
        >
          <p className="text-lead fs-1 text-success text-center my-3">
            Sorry, You Don't Have Enough Point To Buy Something !
            <br />
            <hr />
            <small className="text-danger fs-5 fw-bold">Tips: The More You Use Our Product The More You Earn a Lot !</small>
          </p>
          <Link to="/MainGreenHome">
            <button className="btn btn-light w-100 text-dark btn-lg">
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default InsuffientPoint;
