import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <div className="row m-2">
        <div
          className="col-md-6 mx-auto border p-4 border-light shadow-lg rounded bg-light"
          style={{ marginTop: "120px" }}
        >
          <p className="display-3 text-danger fw-bold">404!</p>
          <p className="display-5 text-dark my-4">Page Not Found!</p>
          <Link to="/MainGreenHome">
            <p className="fs-5">Back To Home Page</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
