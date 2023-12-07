import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import OrderForm from "./OrderForm";
import MainGreenHome from "./MainGreenPoint";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../features/Cart";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import emptyCart from "../Assets/emptyCart.gif";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdShoppingCartCheckout } from "react-icons/md";
import { LiaDotCircle } from "react-icons/lia";
import { LiaSearchDollarSolid } from "react-icons/lia";
import { BsSend } from "react-icons/bs";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { LiaShippingFastSolid } from "react-icons/lia";

//firebase importing stiff here
import { db } from "./This-firebase";
import { collection, docs, getDocs, updateDoc, doc } from "firebase/firestore";
let LogInUser = localStorage.getItem("USERNAMEOFGREENCOIN");

const CheckoutPage = ({ UserPoint }) => {
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

  const [productPoint, setproductPoint] = useState(0);
  const [CanUserBuy, setCanUserBuy] = useState(false);
  const [EmptyCart, setEmptyCart] = useState(false);
  const [NowBalance, setNowBalance] = useState(0);

  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const CheckOut = () => {
    if (UserName.Point >= Total) {
      setNowBalance(Total);
      setCanUserBuy(true);
    } else {
      navigate("/InsuffientFunds");
    }
  };

  // total birr
  let Total = 0;

  return (
    <>
      {CanUserBuy ? (
        <OrderForm
          cart={cart.map((itm) => itm.ProductName)}
          NowBalance={NowBalance}
        />
      ) : (
        <>
          <nav
            className="navbar navbar-light bg-dark p-3"
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
                  style={{ color: "white", fontSize: "28px" }}
                >
                  <i
                    className="fa fa-pagelines fa-2x"
                    style={{ color: "green" }}
                  />
                  &nbsp;GreenPoint
                </Link>
              </div>
              <Link to="/Store">
                <div className="rightNav" style={{ cursor: "pointer" }}>
                  <span className="text-light fs-1">
                    {" "}
                    <IoChevronBackCircleOutline />{" "}
                  </span>
                </div>
              </Link>
            </div>
          </nav>

          <div className="checkoutpgae bg-warning p-1 mt-2">
            {Total !== 0 ? (
              ""
            ) : (
              <h3 className="text-dark my-3">
                Checkout Page{" "}
                <span className="fs-1 text-light">
                  <IoBagCheckOutline />
                </span>
              </h3>
            )}
          </div>

          <div className="checkoutpgae bg-light p-1 mt-2 d-flex flex-column justify-content-center align-items-center">
            {Total !== 0 ? (
              <h5 className="text-dark my-3">
                Oppps.. Your Cart Seems Like Empty !
              </h5>
            ) : (
              ""
            )}
            {Total == 0 ? (
              ""
            ) : (
              <img src={emptyCart} alt="Empty Cart GIF" className="img-fluid" />
            )}
            {Total == 0 ? (
              ""
            ) : (
              <Link to="/MainGreenHome">
                <button className="btn btn-info btn-lg mt-5 px-5 mb-2">
                  Order Now
                </button>
              </Link>
            )}
          </div>

          <div className="">
            <div className="row m-1" style={{ fontFamily: "serif" }}>
              {cart &&
                cart.map((OrderedItem) => (
                  <div
                    className="col-md-3 mt-2"
                    //  style={{ borderRadius: 32 }}
                  >
                    <div className="card bg-dark border border-none rounded mx-auto">
                      <img
                        src={OrderedItem.ProductUrl}
                        alt="some image"
                        className="img-fluid"
                        style={{
                          width: "auto",
                          height: "300px",
                          objectFit: "cover",
                        }}
                      />

                      <div className="card-footer">
                        <div
                          className="qty"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <p className="text-light fw-light display-6">
                            {OrderedItem.ProductName}
                          </p>
                          <p className="fw-bold h4 text-success">
                            &nbsp;
                            <span className="text-light">
                              {OrderedItem.ProductPoint}
                            </span>{" "}
                            Point
                          </p>
                        </div>
                        {/* quantity */}
                        {/* <div className="qty d-flex align-items-center justify-content-center gap-5">
                      <p className="text-light">Select the Quantities:</p>
                      <select name="selection" id="select" className="form-select" onChange={ (e) => setquantity(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                      <p className="text-light">{quantity}</p>
                    </div> */}
                        <button
                          className="btn btn-danger w-100"
                          onClick={() => dispatch(removeItem(OrderedItem.id))}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {Total == 0 ? (
            <div className="row mt-5 bg-dark py-5 mx-auto">
              {/* <h1 className="text-light text-center fw-light">Almost There...</h1> */}
              <div className="col-md-8 mx-auto">
                <div className="card p-1">
                  <div className="card-header text-center">
                    <h3 className="text-primary fs-3">
                      Checkout Your Order{" "}
                      <span className="fs-1">
                        <MdShoppingCartCheckout />
                      </span>
                    </h3>
                  </div>
                  <div className="card-body">
                    <div className="row row-cols-2 p-0">
                      <div className="col-md-6 text-start">
                        {cart &&
                          cart.map((item) => (
                            <>
                              <p className="text-success fw-bold my-5">
                                {" "}
                                <span className="text-success">
                                  {" "}
                                  <LiaDotCircle />
                                </span>{" "}
                                {item.ProductName}:{" "}
                              </p>
                              <hr />
                            </>
                          ))}
                        <div className="Ttotal my-5">
                          <b className="small text-danger">
                            {" "}
                            <span className="text-success">
                              <LiaSearchDollarSolid />
                            </span>{" "}
                            Total:{" "}
                          </b>
                        </div>
                        <hr />
                        <div className="TdeliveryFee my-5">
                          <b className="small text-danger">
                            {" "}
                            <span className="text-success">
                              <FaPersonWalkingLuggage />
                            </span>{" "}
                            Delivery Fee:{" "}
                          </b>
                        </div>
                        <hr />
                        <div className="TgrandTotal my-5">
                          <b className="small text-danger">
                            {" "}
                            <span className="text-success">
                              <LiaShippingFastSolid />
                            </span>{" "}
                            Grand Total:{" "}
                          </b>
                        </div>
                        <hr />
                      </div>
                      <div className="col-md-6 text-end">
                        {cart &&
                          cart.map((birr) => (
                            <>
                              <p className="fw-bold text-success my-5">
                                {" "}
                                {birr.ProductPoint} ETB
                              </p>
                              <small hidden>
                                {(Total += Number(birr.ProductPoint))}
                              </small>
                              <hr />
                            </>
                          ))}
                        <div className="total my-5">
                          <strong className="fs-6 text-danger">
                            {Total} ETB
                          </strong>
                        </div>
                        <hr />
                        <div className="delivery-Fee my-5">
                          <strong className="fs-6 text-danger my-5">
                            {Total > 0 ? 4.99 + " ETB" : 0.0 + " ETB"}
                          </strong>
                        </div>
                        <hr />
                        <div className="grandtotal my-5">
                          <strong className="fs-6 text-danger my-5">
                            {Total > 0 ? Total + 5 : 0} ETB
                          </strong>
                        </div>
                        <hr />
                      </div>
                    </div>
                  </div>
                  {Total > 0 && (
                    <button
                      className="btn btn-danger w-100 mx-auto mb-3"
                      onClick={CheckOut}
                    >
                      Place Order{" "}
                      <span className=" ms-2 fs-3">
                        <BsSend />
                      </span>{" "}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </>
      )}
      <p className=" m-2 mt-5 small text-center" style={{ color: "#d900ff" }}>
        &copy; copyright 2023 All Right Reserved | Green Point
      </p>
    </>
  );
};

export default CheckoutPage;
