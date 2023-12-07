import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useNavigate } from "react-router-dom";
import SuccessFullGain from "./SuccessFullGain";
import Banner from "./Banner";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaUserTie,
  FaBtc,
  FaHubspot,
  FaCogs,
  FaShoppingCart,
} from "react-icons/fa";
import OurService from "./OurService";
import HavingFun from "./HavingFun";
import PopularMenu from "./PopularMenu";
import foodPic from "../Assets/hamburger.jpg";
import img0 from "../Assets/img0.jpeg";
import img00 from "../Assets/img00.jpeg";
import { BsCashCoin } from "react-icons/bs";

//firebase importing stiff here
import { db } from "./This-firebase";
import { collection, docs, getDocs, updateDoc, doc } from "firebase/firestore";

const REFFERAL_CODE = "mullerking01";
let LogInUser = localStorage.getItem("USERNAMEOFGREENCOIN");

function MainGreenCoin() {

  const [CheckRefferal, setCheckRefferal] = useState(false);
  const [RefferalCode, setRefferalCode] = useState("");
  const [Coin, setCoin] = useState(2);
  const [Restriction, setRestriction] = useState(false);
  const [Time, setTime] = useState(true);
  const [Modal, setModal] = useState(false);
  const [Points, setPoints] = useState();
  const [Language, setLanguage] = useState(false);
  const [backgroundcolor, setbackgroundcolor] = useState(false);
  const [GetPoint, setGetPoint] = useState(false);
  // const [ExpiredDate , setExpiredDate] = useState("43200000");

  const navigate = useNavigate();
  const handleGetCoin = async (id, Point) => {
    if (RefferalCode === REFFERAL_CODE) {
      setGetPoint(true);
      const UserDoc = doc(db, "GreenPointUsers", id);
      const UpdatedValue = {
        Point: Point + 2,
      };
      await updateDoc(UserDoc, UpdatedValue)
        .then((res) => {
          setModal(true);
          setCoin(Coin + 2);
          // window.location.reload();
          setGetPoint(false);
        })
        .catch((err) => {
          alert("something went wrong Please, Try Again !");
        });

      //   setTimeout(() => {
      //     setTime(false);
      //   }, 1000); // which is equal to 6 hour
    } else {
      setCheckRefferal(true);
    }
  };

  // setRestriction(true);
  // to prevent the user clicking again and again to get unlimited coin we use time interval
  // we are alow the user to gain 4 coins per day
  // we should specify the time
  // morning = 1:00
  // night = 2:00      1-2 2-3 3-4 4-5 5-6 6-7 7-8 8-9 9-10 10-11 11-12 12-13 12-14
  // we got 13 working (reward) giveaway houres
  // we get the interval 6 hour
  // once the user claim the reward (2 coins) user must wait for a 6 hour to get another 2 coins
  // 6 hour equal to milisecond = 21600000
  // setTimeout(() => {
  //   setTime(true);
  // }, 20000); // which is equal to 6 hour

  // let ExDate = "";
  // let SetDate = new Date();
  // let CurrentYear = SetDate.getFullYear();
  // let CurrentMonth = SetDate.getMonth();
  // let CurrentDay = SetDate.getDate();
  // let CurrentDate =CurrentMonth+"/"+CurrentDay+"/"+CurrentYear;
  // useEffect( () => {
  //   setExpiredDate(CurrentDate)
  //   // setTimeout( () => {
  //   //     setExpiredDate(ExpiredDate > '0' && ExpiredDate - 1);
  //   // }, 1000)
  // }, [])

  const DBRef = collection(db, "GreenPointUsers");
  const [UserData, setUserData] = useState([]);
  const [UserName, setUsername] = useState([]);

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
  }, []);

  // const MinusUser = doc(db , "GreenPointUsers" , UsersId);
  // const NewPoint = {Point: PreUsersPoint - NowUsersPoint};
  // await updateDoc(MinusUser , NewPoint);

  const handleStore = (Point) => {
    navigate("/Store");
  };

  return (
    <div style={{ backgroundColor: backgroundcolor ? "#262626" : "white" }}>
      <Banner />
      {Modal ? (
        <SuccessFullGain setModal={setModal} />
      ) : (
        <div className="row m-2 my-4 userProfiles">
          <div
            id="profil"
            className="col-md-6 p-4 mx-auto mt-3 border border-none shadow-lg rounded text-dark"
            style={{ backgroundColor: "lightgray" }}
          >
            <p
              className="fs-5 fw-light text-start mt-3"
              style={{ color: "#000" }}
            >
              <FaUserTie />
              {/* &nbsp;User : <span className="text-warning">{LogInUser}</span> */}
              &nbsp;&nbsp;:{" "}
              <span className="fw-light">
                {UserData &&
                  UserData.map((user) => (
                    <>
                      <span
                        className=""
                        style={{ color: "black", fontWeight: "normal" }}
                      >
                        {user.Username}
                      </span>
                    </>
                  ))}
              </span>
            </p>
            <p className="fs-5 text-start" style={{ color: "#000" }}>
               <span className=""> <BsCashCoin /> </span>
              {/* &nbsp;Point : <span className="text-warning">{Coin}</span> */}
              &nbsp;:{" "}
              <span className="text-dark">
                <>
                  <span className="" style={{ color: "black" }}>
                    {UserName.Point}
                  </span>
                </>
              </span>
            </p>
          </div>
        </div>
      )}

      {/* <div className="container mx-auto row">
        <div className="col-md-7 w-7 bg-warning bg-opacity-100 p-2 rounded mx-auto border border-warning">
        <p className="fs-6 text-center text-danger fw-bold">
              <i className="fa fa-time" />
              &nbsp;Your Points Expired After :  
              <span className="h3 text-center text-danger">{ExpiredDate}</span>
            </p>
        </div>
      </div> */}

      <div className="row m-3" style={{ fontFamily: "serif" }}>
        <div
          className="col-md-6 mx-auto"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label
            htmlFor="SpecialCode"
            className="text-start fs-5 ms-1 text-dark"
          >
            <span className="text-warning">
              <FaHubspot />
            </span>
            &nbsp;&nbsp;Refferal Code
          </label>
          <div className="text-lead text-muted small text-start ms-1">
            to get free point enter your refferal code here
          </div>
          <input
            type="password"
            id="SpecialCode"
            className="form-control form-control-lg border border-success bg-success bg-opacity-25"
            placeholder="Enter Your Refferal Code..."
            onChange={(event) => setRefferalCode(event.target.value)}
            value={RefferalCode}
            required
          />
          {CheckRefferal && (
            <p className="text-danger text-start ms-1 my-1">
              Invalied Refferal Code
            </p>
          )}
          {Time ? (
            <button
              className="text-dark btn btn-warning btn-lg mt-3 p-1 px-5 rounded border border-warning"
              onClick={() => handleGetCoin(UserName.id, UserName.Point)}
              // style={{ backgroundColor: "green" }}
            >
              <i className="fa fa-dollar" />
              &nbsp;
              {GetPoint ? "Loading..." : "Get My Point"}
              <FaBtc />
            </button>
          ) : (
            <button
              className="btn btn-warning btn btn-lg mt-3 p-1 px-5 rounded border border-warning"
              disabled
              onClick={handleGetCoin}
              // style={{ backgroundColor: "green" }}
            >
              <i className="fa fa-dollar" />
              {/* // make sure you set the time and date with thire point when you
              send the data because it help us to investigated the user valiedness  */}
              &nbsp; GetPoint
            </button>
          )}
        </div>
      </div>

      {/* our popular menus */}
      <p className=" text-center fs-3 mt-5 bg-warning p-2 rounded">
        Our <span className="text-success">Popular Menus&nbsp;</span>
      </p>
      <div
        className="row mt-3"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          gap: "0px",
        }}
      >
        <div className="col-md-3 rounded border border-light shadow-sm mx-auto d-flex flex-column">
          <PopularMenu FoodImg={img00} FoodName="Humburger" FoodPrice="120" />
        </div>
        <div className="col-md-3 rounded border border-light shadow-sm mx-auto d-flex flex-column">
          <PopularMenu FoodImg={img0} FoodName="Special" FoodPrice="270" />
        </div>
        <div className="col-md-3 rounded border border-light shadow-sm mx-auto d-flex flex-column">
          <PopularMenu FoodImg={img00} FoodName="Pitzza" FoodPrice="90" />
        </div>
        <div className="col-md-3 rounded border border-light shadow-sm mx-auto d-flex flex-column">
          <PopularMenu FoodImg={img00} FoodName="Pitzza" FoodPrice="90" />
        </div>
      </div>

      {/* having fun com */}
      <HavingFun />
      {/* our service components */}
      <OurService />

      <div className="row m-3 mt-4" style={{ fontFamily: "serif" }}>
        <div className="mt-5 text-lead text-muted small text-center ms-1">
          Read Below How Its Work Section WithIn Two Different Languages For
          More Interaction !
        </div>
        <div className="col-md-6 mx-auto">
          <details
            open
            className="border border-secondary mx-auto rounded p-2 text-center text-warning"
          >
            <summary className="fs-5">
              How It's Work&nbsp;&nbsp;
              <FaCogs />
            </summary>
            <hr />
            <button
              id="moveMe"
              onClick={() => setLanguage(!Language)}
              className="btn btn-lg border border-info mb-2 text-dark w-100"
              style={{ background: "aqua" }}
            >
              <span id="moveMe" >{Language ? "English" : "Amharic"}</span>
            </button>
            {Language ? (
              <p
                className="text-lead text-dark"
                style={{ fontFamily: "serif" }}
              >
                ይህንን መድረክ ሲቀላቀሉ 2 ነጥብ በነጻ ያግኙ ከዛ በካፊአችን ውስጥ ከእያንዳንዱ ትዕዛዝ በኋላ ነፃ
                2 ነጥብ ያገኛሉ በመጨረሻ ነጥብዎን በመተቀም በመደብራችን ውስጥ የሆነ ነገር መግዛት ይችላሉ።
              </p>
            ) : (
              <p className="text-lead" style={{ fontFamily: "serif" }}>
                <span className="text-success h4">
                  <i className="fa fa-dollar" />
                  Earn {""}
                </span>
                Free 2 Point When You Are{" "}
                <span className="text-success">Join</span> This Platform Then
                After Every {""}
                <span className="text-success">
                  Order In Our Green Cafe
                </span>{" "}
                You Will Get Free 2 Point Finally With Your Point You Can {""}
                <span className="text-success">Buy</span> Something In Our
                Store.
              </p>
            )}
            <button
              onClick={() => handleStore(UserName.Point)}
              className="text-light btn btn-dar p-2 px-5"
              style={{ backgroundColor: "green" }}
            >
              <i className="fa fa-cart-plus fa-1x" />
              &nbsp;&nbsp;Order Now <FaShoppingCart />
            </button>
          </details>
        </div>
        <p className="fs-6 text-center text-danger fw-lighter mt-3">
          <i className="fa fa-time" />
          &nbsp;Your Points Expired After One Month !
        </p>
      </div>
      <div className="links bg-dark p-3">
        <p className="text-light h2">Quick Links</p>
        <div className="social">
          <Link to="https://facebook.com">
            <FaFacebookF />
          </Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="https://@t.me/justcodewithme">
            <FaTelegramPlane />
          </Link>
        </div>
        <h1>
          <h3> </h3>
        </h1>
        <p className="m-2 small text-center" style={{ color: "#d900ff" }}>
          &copy; copyright 2023 All Right Reserved | Green Point
        </p>
        {/* <div className="checkbox form-switch">
          <input
            hidden
            type="checkbox"
            id="check"
            className="form-check-input"
            onClick={() => setbackgroundcolor(!backgroundcolor)}
          />
          <label
            htmlFor="check"
            className="form-check-lable ms-2"
            style={{ color: backgroundcolor ? "white" : "black" }}
          >
            {backgroundcolor ? "" : ""}
          </label>
        </div> */}
      </div>
    </div>
  );
}

export default MainGreenCoin;
