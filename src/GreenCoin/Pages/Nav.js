import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import MainGreenCoin from "./MainGreenPoint";
import { Link } from "react-router-dom";
import { FaShoppingCart} from "react-icons/fa";
import logo from '../Assets/logo-no-background.png'


function Nav() {
  return (
    <>
      <nav
        className="navbar navbar-light bg-dark shadow"
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
            <a className="navbar-brand" href="/" style={{ color: "green" , fontFamily: "sans-serif" }}>
              &nbsp;
             <img src={logo} alt="logo" className="img-fluid ms-3" style={{ width: "50px" }} />
              {/* &nbsp;GreenPoint */}
            </a>
          </div>
          <div className="rightNav">
            <Link to="/Store">
              <button
                className="text-light btn btn-md btn-outline-info m-1"
                style={{ backgroundColor: "" }}
              >
                <i className="fa fa-cart-plus fa-1x" />
                &nbsp;&nbsp;<FaShoppingCart /> Order Now
              </button>
            </Link>
            {/* <button className="btn btn-outline-secondary">Contact Us</button> */}
          </div>
        </div>
      </nav>
      <MainGreenCoin />
    </>
  );
}

export default Nav;
