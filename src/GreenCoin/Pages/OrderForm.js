import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "./F1";
import {
  addDoc,
  collection,
  updateDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import MainGreenCoin from "./MainGreenPoint";
import { BiInfoCircle } from "react-icons/bi";
import { LuUser } from "react-icons/lu";
import { MdPhoneIphone } from "react-icons/md";
import { PiAddressBookThin } from "react-icons/pi";
import { BsSend } from "react-icons/bs";
import { PiBuildingsThin } from "react-icons/pi";
import { GiExitDoor } from "react-icons/gi";

import { useDispatch } from 'react-redux'
import { clearAllItems } from '../features/Cart';

let LogInUser = localStorage.getItem("USERNAMEOFGREENCOIN");

function OrderForm({cart , ProName, NowBalance }) {
  const [OrderFullName, setOrderFullName] = useState("");
  const [OrderPhoneNumber, setPhoneNumber] = useState("");
  const [OrderAddress, setOrderAddress] = useState("");
  const [Block , setBlock] = useState("");
  const [Dorm , setDorm] = useState("");
  const [OrderLoading, setOrderLoading] = useState(false);
  const [TransferForMinusUserBalance, setTransferForMinusUserBalance] = useState(false);
  const [NeverRenderHomePage, setNeverRenderHomePage] = useState(false);
  const [items , setItems] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const DBRef = collection(db, "GreenPointUsers");
  const DBRef2 = collection(db, "ProductPoint");
  const OrderD = new Date();

  const CurrentDate =
    OrderD.getMonth() +
    1 +
    "/" +
    OrderD.getDate() +
    "/" +
    OrderD.getFullYear() +
    " - " +
    OrderD.getHours() +
    ":" +
    OrderD.getMinutes();

  // to get the current user and minus his balances
  const [Username, setUsername] = useState([]);
  const [UserData, setUserData] = useState([]);

  useEffect( () => {
    const getUserItems = () => {
      {
        cart.map( (itm) => {
          setItems(itm.ProductName);
        })
      }
    }
    getUserItems();
  } , [])

  useEffect(() => {
    const GetUserData = async () => {
      const data = await getDocs(DBRef);
      let User = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      let RealUser = User.filter((real) => real.Username === LogInUser);

      let real = RealUser.map((datas) => {
        setUsername(datas);
      });

      setUserData(RealUser);
    };
    GetUserData();
    // alert(Username.id);
    // alert(Username.Point);
    // alert(NowUsersPoint);
  }, []);

  // to valiedate user order and redirect to order confirmation page
  const handleOrderNowForm = async (e, id, Point) => {
    try {
      e.preventDefault();
      setOrderLoading(true);

      // to add user info used for address the pakages
      await addDoc(DBRef2, {
        CFullName: OrderFullName,
        CPhoneNumber: OrderPhoneNumber,
        Block: Block,
        Dorm: Dorm,
        OrderDate: CurrentDate,
        OrderItem: cart,
      });
      // to update the balances
      // minus user balance based on the products amount
      // to update the doc we need user.id and user.preValue
      const userDoc = doc(db, "GreenPointUsers", id);
      const NewBalances = { Point: Point - NowBalance };
      await updateDoc(userDoc, NewBalances);
      alert(" Your Order Successfully Complated !");
      dispatch(clearAllItems( {cart: []}));
      navigate("/OrderConfirmation");
      setOrderLoading(false);
    } catch (err) {
      alert(err.name);
      alert(err.message);
    }
  };

  // const updateUserBalance = async (id , Point) => {

  // }

  return (
    <>
      {NeverRenderHomePage && (
        <MainGreenCoin
          NowBalance={NowBalance}
          TransferForMinusUserBalance={TransferForMinusUserBalance}
        />
      )}

      <div className="row m-2" style={{ fontFamily: "serif"}}>
        <div className="col-md-5 mx-auto border border-success shadow p-3 rounded mt-5">
          <p
            className="text-lead fs-3 text-success text-decoration-underline"
            style={{ fontFamily: "serif" , textUnderlineOffset: "10px" , alignItems: "start" , justifyContent: "flex-start"}}
          >
            Delivery Information <span className="fs-1 text-danger"> {" "} <BiInfoCircle /> </span>
          </p>
          <form>
            <label
              htmlFor="FullName"
              className="text-success opacity-50 ms-1 mb-2"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
              }}
            >
              <span className="fs-5"><LuUser /> Full Name </span>
            </label>
            <input
              type="text"
              id="FullName"
              className="form-control border border-lighter bg-success bg-opacity-25 mb-2"
              placeholder="Full Name"
              onChange={(event) => setOrderFullName(event.target.value)}
              required
            />
            <label
              htmlFor="phoneNo"
              className="text-success opacity-50 ms-1 mb-2"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
              }}
            >
             <span className="fs-5"> <MdPhoneIphone /> Phone Number</span>
            </label>
            <input
              type="number"
              id="phoneNo"
              className="form-control border border-lighter bg-success bg-opacity-25 mb-2"
              placeholder="Phone Number"
              onChange={(event) => setPhoneNumber(event.target.value)}
              required
            />
            <label
              htmlFor="address"
              className="text-success opacity-75 my-3"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <span className="fs-6 small text-danger"><PiAddressBookThin />Set Your Address Carefully !</span>
            </label>
            {/* <textarea
              id="address"
              cols="30"
              rows="3"
              className="form-control border border-lighter bg-success bg-opacity-25"
              placeholder="Enter Your Relative Location"
              onChange={(event) => setOrderAddress(event.target.value)}
              required
            /> */}
            <label
              htmlFor="phoneNo"
              className="text-success opacity-50 ms-1 mb-2"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
              }}
            >
             <span className="fs-5"> <PiBuildingsThin /> Block Number</span>
            </label>
            <input
              type="number"
              id="BlockNo"
              className="form-control border border-lighter bg-success bg-opacity-25 mb-2"
              placeholder="Block Number"
              onChange={(event) => setBlock(event.target.value)}
              required
            />
             <label
              htmlFor="phoneNo"
              className="text-success opacity-50 ms-1 mb-2"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
              }}
            >
             <span className="fs-5"> <GiExitDoor /> Dorm / Room Number</span>
            </label>
            <input
              type="number"
              id="DormNo"
              className="form-control border border-lighter bg-success bg-opacity-25 mb-2"
              placeholder="Dorm / Room Number"
              onChange={(event) => setDorm(event.target.value)}
              required
            />
            <br />
            {/* { Username && Username.map( (samtim) => ( */}
            <button
              onClick={(e) =>
                handleOrderNowForm(e, Username.id, Username.Point)
              }
              type="submit"
              className="btn bt-lg btn-danger w-100 mb-3"
            >
              {OrderLoading ? (
                <>
                  Please Wait&nbsp;
                  <i className="fa-spin fa fa-spinner fa-1x" />
                </>
              ) : (
                <>
                  <span className=" ms-2 fs-5"> Order Now <BsSend /></span>
                </>
              )}
            </button>
            {/* //  )) */}
            {/* // } */}
          </form>
        </div>
      </div>
      {/* <p className=" m-2 mt-5 small text-center" style={{ color: "#d900ff" }}>
        &copy; copyright 2023 All Right Reserved | Green Point
      </p> */}
    </>
  );
}

export default OrderForm;
