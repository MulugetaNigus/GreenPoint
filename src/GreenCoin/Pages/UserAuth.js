import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
// import { color } from "framer-motion";
import logo from "../Assets/logo-no-background.png";

// firebase import here
import { db } from "./F1";
import { auth, provider } from "./F1";
import { addDoc, collection , getDocs } from "firebase/firestore";
import { signInWithPopup } from "firebase/auth";

function UserAuth() {
  // to check weather the user register or not
  const [LogInUsers, setLogInUser] = useState("");
  const [RegisterUsers, setRegisterInUser] = useState("");
  const [FakeLogInUser, setFakeLogInUser] = useState(false);
  const [FakeRegUser, setFakeRegUser] = useState(false);

  const Schema = yup.object().shape({
    UserName: yup.string().min(5).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(Schema),
  });

  const navigate = useNavigate();

  // reference for our database
  const DBRef = collection(db, "GreenPointUsers");

  // fetch the username for validating the registration
  const [Username , setUsername] = useState([]);
  useEffect(() => {
    const GetUserData = async () => {
      try{
        const data = await getDocs(DBRef);
        let User = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setUsername(User[0].Username);
      }catch(err){
        alert("please, check your intenet connections !");
      }
    };
      GetUserData();
  }, []);

  const handleUserReg = async () => {
    console.log(RegisterUsers);
    
    // firebase work starts here
    
    try{
      if(RegisterUsers !== Username){
        await addDoc(DBRef , {Username: RegisterUsers , Point: 2});
        alert("successfully complated !");
      }else{
        alert("Username: " + RegisterUsers + " already Taken Please Use Different Username" );
        return;
      }
    }catch(err){
      alert(err.name);
    }

    if (RegisterUsers.length > 0) {
      localStorage.setItem("USERNAMEOFGREENCOIN", RegisterUsers.trim());
      navigate("/MainGreenHome");

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      setFakeRegUser(true);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventdefault();
  };

  const handleUserLogIn = (e) => {
    let NewLogInUser1121 = localStorage.setItem(
      "NewUSERNAMEOFGREENCOIN",
      LogInUsers
    );
    let NewLogInUser = localStorage.getItem("USERNAMEOFGREENCOIN");
    console.log("ye ahun login user: " + LogInUsers);
    console.log("tkklegnaw user login yaregew: " + NewLogInUser);
    // LogInUsers
    if (LogInUsers !== NewLogInUser) {
      setFakeLogInUser(true);
    } else {
      navigate("/MainGreenHome");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  // SIGNIN WITH GOOGLE
  const SignInWithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/MainGreenHome");
      })
      .catch((error) => {
        alert(error.name);
        alert(error.message);
      });
  };

  // useEffect( () => {
  //   localStorage.clear();
  // })

  return (
    <>
      <div>
        <div className="row m-3">
          <div
            className="col-md-5 mx-auto border rounded shadow p-2"
            style={{ marginTop: "80px", backgroundColor: "#e4e4e4" }}
          >
            <div
              className="header"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={logo}
                alt="green point logo"
                className="img-fluid w-50"
              />
              {/* <p
              className="display-6"
              style={{
                color: "green",
                fontWeight: "ligh",
                letterSpacing: "4px",
              }}
            >
              GreenPoint
            </p> */}
              <b
                className="fs-5"
                style={{ fontFamily: "serif", color: "green" }}
              >
                earn free 2 Points when you are join us !
              </b>
            </div>
            <br />
            {/* <form> */}

            <label
              htmlFor="Username"
              className="text-muted ms-1 mb-1"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
              }}
            >
              <i className="fa fa-user-o" />
              &nbsp;&nbsp;Username
            </label>
            {
              <>
                {localStorage.getItem("USERNAMEOFGREENCOIN") ? (
                  <>
                    <input
                      type="text"
                      id="Username"
                      autoSave="flase"
                      className="form-control form-control-lg border border-none bg-danger bg-opacity-25 mb-1"
                      // className="form-control bg-light border border-secondary bg-opacity-25 mb-1"
                      placeholder="Enter Your Username"
                      onChange={(event) => setLogInUser(event.target.value)}
                    />
                    {FakeLogInUser && (
                      <small
                        className=" text-start ms-1 text-danger"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "start",
                        }}
                      >
                        Invalied Username !
                      </small>
                    )}
                    <button
                      className="btn btn-success btn-lg my-2 mb-3 w-100"
                      onClick={handleUserLogIn}
                    >
                      <i className="fa fa-sign-in" />
                      &nbsp;&nbsp;LogIn
                    </button>
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      id="Username"
                      // className="form-control bg-light border border-secondary bg-opacity-25 mb-1"
                      className="form-control form-control-lg border border-none bg-danger bg-opacity-25 mb-1"
                      placeholder="Enter Your Username"
                      onChange={(event) =>
                        setRegisterInUser(event.target.value)
                      }
                    />
                    {FakeRegUser && (
                      <small
                        className=" text-start ms-1 text-danger"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "start",
                        }}
                      >
                        Invalied Username !
                      </small>
                    )}
                    <button
                      className="btn btn-success btn-lg my-3 w-100"
                      onClick={handleUserReg}
                    >
                      <i className="fa fa-registered" />
                      &nbsp;&nbsp;Register
                    </button>
                  </>
                )}
              </>
            }
            <p
              className="text-danger"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
              }}
            >
              {errors.UserName?.message}
            </p>
            {/* </form> */}
            {/* <p className="text-danger text-center ms-2">OR SignIn With Google To Continue</p>
          <button className="btn btn-outline-warning text-dark w-100 btn-lg" onClick={ () => SignInWithGoogle}>SignIn With Google</button> */}
          </div>
        </div>
        <p className="m-2 mt-3 small mt-5" style={{ color: "#d900ff" }}>
          &copy; copyright 2023 All Right Reserved | Green Point
        </p>
      </div>
    </>
  );
}

export default UserAuth;
