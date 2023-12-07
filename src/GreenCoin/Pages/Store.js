import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./Nav";
import burger from "../Assets/hamburger.jpg";
import { Link, useNavigate } from "react-router-dom";
import OrderConfirmation from "../Pages/OrderConfirmation";
import { FaBtc, FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { BiCategory } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";

//firebase impor
import { db } from "./F1";
import { getDocs, collection, docs } from "firebase/firestore";

// import { dbs } from '../GreenPointAdmin/FirebaseStore/Firebase-Store';

import StoreItem from "./StoreItem";
import CheckoutPage from "./CheckoutPage";

let LogInUser = localStorage.getItem("USERNAMEOFGREENCOIN");

function Store() {

  const [UserPoints, setUserPoints] = useState();
  const [Order, setOrder] = useState(false);
  const [OrderFullName, setOrderFullName] = useState("");
  const [OrderPhoneNumber, setPhoneNumber] = useState("");
  const [OrderAddress, setOrderAddress] = useState("");
  const [OrderLoading, setOrderLoading] = useState(false);
  const [UserName, setUsername] = useState([]);
  const [UserData, setUserData] = useState([]);
  const [StoreData, setStoreData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [CheckOutPage , setCheckOutPage] = useState(false);
  const [catagory , setcatagory] = useState("ProductStore");

  const DBRef1 = collection(db, "GreenPointUsers");
  useEffect(() => {
    const GetUserData = async () => {
      const data = await getDocs(DBRef1);
      let User = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      let RealUser = User.filter((real) => real.Username === LogInUser);

      let real = RealUser.map((datas) => {
        setUsername(datas);
      });

      setUserData(RealUser);
    };
    GetUserData();
  }, []);

  const BDRef2 = collection(db, `${catagory}`);
  useEffect(() => {
    setLoading(true);
    const GetAllUserData = async () => {
      try {
        const data = await getDocs(BDRef2);
        setStoreData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false);
        console.log(StoreData);
      } catch (err) {
        alert(err.name);
      }
    };
    GetAllUserData();
  }, [catagory]);

 const cart = useSelector( (state) => state.cart.cart);

//  to get the total quantity
let total = 0;
const getTotalQuantity = () => {
  cart && cart.forEach( (item) => {
    total += item.quantity
  })

  return total;
}

  return (
<>
{ CheckOutPage 
?
 <CheckoutPage UserPoint={UserName.Point}/>
:
<>
      <nav
        className="navbar navbar-light bg-dark"
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
              style={{ color: "white", fontSize: "22px" }}
            >
              <i className="fa fa-pagelines fa-2x" style={{ color: "green" }} />
              &nbsp; GreenPoint
            </Link>
          </div>
          <Link to="/CheckoutPage">
          <div className="rightNav">
           <button
            onClick={ () => setCheckOutPage(true)}
            className="btn btn-outline-warning border border-warning text-light fs-3 ms-3"
            style={{ backgroundColor: "" }}
            >
            <BsCart3 />
            <sup className="ms-1 fs-4">{getTotalQuantity()}</sup>
            </button>
          </div>
          </Link>
        </div>
      </nav>

  <div className="row row-cols-2 mx-auto bg-warning my-2 pb-3"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center"
      }}
  >
    <div className="col-md-4 mt-4"
    style={{
      alignItems: "center",
      justifyContent: "center",
      alignContent: "center"
    }}
    >
      <small className="text-primary fw-bold fs-5">Categories <span className="fs-4 text-primary"> <BiCategory /> </span>  </small>
    </div>
    <div className="col-md-4 mt-4"
    style={{
      alignItems: "center",
      justifyContent: "center",
      alignContent: "center"
    }}
    >
        <select name="filter" id="filter" className="form-select form-select-lg bg-warning bg-opacity-75 border border-dark" onChange={ (change) => setcatagory(change.target.value)}>
        <option value="Select The Catagory If You Want" selected disabled>Select The Catagory If You Want</option>
        <option value="Foods">Foods</option>
        <option value="Drinks">Soft Drinks</option>
        <option value="Others">Others</option>
      </select>
    </div>
  </div>

  {/* LOADING STATE HERE COMING FROM THE BACK */}
  <div className="custome-spin d-flex justify-content-center gap-3">
  <div className="spin1">
      {Loading && <h1 className="mt-5 d-flex align-items-center justify-content-center display-1 text-warning">.</h1>}
    </div>
    <div className="spin2">
      {Loading && <h1 className="mt-5 d-flex align-items-center justify-content-center display-1 text-primary">.</h1>}
    </div>
    <div className="spin3">
      {Loading && <h1 className="mt-5 d-flex align-items-center justify-content-center display-1 text-danger">.</h1>}
    </div>
    <div className="spin1">
      {Loading && <h1 className="mt-5 d-flex align-items-center justify-content-center display-1 text-success">.</h1>}
    </div>
  </div>

      <StoreItem
        StoreData={StoreData}
        setOrder={setOrder}
        UserPoint={UserName.Point}
      />
</>
  }
      <p className="m-2 mt-5 small text-center" style={{ color: "#d900ff" }}>
        &copy; copyright 2023 All Right Reserved | Green Point
      </p>
      </>
  );
}

export default Store;
