import React, { useEffect, useState } from "react";

function SecretRefCode() {
    const [timeanddate , settimeanddate] = useState("")
  // to generate random referal code for every 2 min
  let RefCode = [];
  const UserRefferalCode = () => {
    for (let index = 0; index < 6; index++) {
      let RandomCode = Math.floor(Math.random() * 5);
      RefCode.push(RandomCode);
    }
    return RefCode.join("");
  };
  console.log();

  setInterval(localStorage.setItem("SecretCode", UserRefferalCode()), 50000);
  useEffect( () => {
    let today = new Date();
    let day = today.getDay()
    let hour = today.getHours()
    let minut = today.getMinutes()
    alert(day+" > "+hour+" : "+minut)
    settimeanddate(day+" > "+hour+" : "+minut);
  }, [])
 
  return (
    <>
      <div className="row">
        <div className="col-md-12 mx-auto mt-5 mb-4">
          <button
            className="btn btn-primary"
            onClick={() => window.location.reload()}
          >
            refresh
          </button>
          <h1>{localStorage.getItem("SecretCode")}</h1>
          <h1>{timeanddate}</h1>
        </div>
      </div>
    </>
  );
}

export default SecretRefCode;
