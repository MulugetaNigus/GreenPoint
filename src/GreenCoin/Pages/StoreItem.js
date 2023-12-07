import { Link, useNavigate } from "react-router-dom";
import { FaBtc, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import CheckoutPage from "./CheckoutPage";

import { useDispatch } from 'react-redux';
import { addToCart } from '../features/Cart';

const StoreItem = ({ StoreData, UserPoint }) => {

  const [CanUserBuy, setCanUserBuy] = useState(false);
  const [ProName, setProName] = useState("");
  const [PreUsersPoint, setPreUsersPoint] = useState("");
  const [UsersId, setUsersId] = useState("");
  const [NowUsersPoint, setNowUsersPoint] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const handleOrderNow = (productPoint, ProductName, id , item) => {
    
    // if (UserPoint >= productPoint) {
    //   setCanUserBuy(true);
    //   setProName(ProductName);
    //   setPreUsersPoint(UserPoint);
    //   setUsersId(id);
    //   setNowUsersPoint(productPoint);
    // } else {
    //   navigate("/InsuffientFunds");
    // }
  // };

  return (
    <div className="">
        <div className="row m-1" style={{ fontFamily: "serif" }}>
          {StoreData &&
            StoreData.map((item) => (
              <div
                className="col-md-3 mt-2"
                //  style={{ borderRadius: 32 }}
              >
                <div className="card bg-dark border border-none rounded mx-auto">
                  <img
                    src={item.ProductUrl}
                    alt="some image"
                    className="img-fluid"
                    style={{
                      width: "auto",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-footer">
                    <p className="text-light fw-light display-6">
                      {item.ProductName}
                    </p>
                    <div
                      className="qty"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      <p className="fw-bold h4 text-success">
                        <FaBtc />
                        &nbsp;
                        <span className="text-light">
                          {item.ProductPoint}
                        </span>{" "}
                        Point
                      </p>
                    </div>
                    <button
                      className="btn btn-danger w-75 mb-1"
                      onClick={() => {dispatch(addToCart(item))}
                      // handleOrderNow(
                      //     item.ProductPoint,
                      //     item.ProductName,
                      //     item.id,
                      //     item.ProductPoint,
                      //     item.ProductUrl,
                      //     item
                      //   )
                      }
                    >
                      <FaShoppingCart />
                      &nbsp;&nbsp;Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
    </div>
  );
};

export default StoreItem;
