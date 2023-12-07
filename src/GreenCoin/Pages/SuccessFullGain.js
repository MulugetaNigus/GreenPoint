import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function SuccessFullGain({ setModal }) {
  const [FinishLoading, setFinishLoading] = useState(false);

  setTimeout(() => {
    setFinishLoading(true);
  }, 5000);

  const calcelModal = () => {
    // setModal(false);
      window.location.reload();
  };

  return (
    <>
      <div className="row m-2">
        <div
          className="col-md-6 mx-auto"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {FinishLoading ? (
            <>
              <i className="fa fa-thumbs-o-up fa-3x text-success" />
              <p className="fs-2 text-success border border-secondary rounded p-2" style={{ fontFamily: "serif"}}>
                Congradulation You Get 2 Points !
                <button
                  className="btn btn-primary w-100 mt-3"
                  onClick={calcelModal}
                >
                  Claim
                </button>
              </p>
            </>
          ) : (
            <div className="mb-5" style={{marginTop: "-50px"}}>
              {/* LOADING STATE HERE COMING FROM THE BACK */}
              <div className="custome-spin d-flex justify-content-center gap-3">
              <div className="spin1">
                  <h1 className="mt-5 d-flex align-items-center justify-content-center display-1 text-warning">.</h1>
                </div>
                <div className="spin2">
                  <h1 className="mt-5 d-flex align-items-center justify-content-center display-1 text-primary">.</h1>
                </div>
                <div className="spin3">
                  <h1 className="mt-5 d-flex align-items-center justify-content-center display-1 text-danger">.</h1>
                </div>
                <div className="spin1">
                  <h1 className="mt-5 d-flex align-items-center justify-content-center display-1 text-success">.</h1>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SuccessFullGain;
