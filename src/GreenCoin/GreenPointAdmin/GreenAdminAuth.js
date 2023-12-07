import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { AuthenticateUser } from "./Features/AuthUser";
import { auth , provider } from '../Pages/F1';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword , signInWithPopup} from 'firebase/auth';

function AdminAuth() {

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignInWithGoogle = async () => {
    await signInWithPopup(auth , provider)
    .then( (result) => {
      dispatch(AuthenticateUser(true));
      navigate("/Path")
    }).catch( (err) => {
      alert("please check your internet connnection and try !");
    })
  }
  return (
    <div className="">
      <div className="row m-2">
        <div
          className="col-md-6 mx-auto border border-none p-3 rounded"
          style={{ marginTop: "200px" }}
          id="AdminBg"
        >
          <p className="text-center text-success display-6">GreenPoint <span className="text-danger">Admins</span></p>
          {/* <button className="btn btn-outline-warning w-100 my-3 mt-3"
          onClick={handleSignUp}
          >
            <i className="fa fa-google-plus" />
            &nbsp;SignUp With Google
          </button> */}
          <hr />
          <p className="text-success fs-6"> SignIn With Google To Continue !</p>
          <hr />
          <button className="btn btn-outline-info w-100 btn-lg mb-3" onClick={ () => handleSignInWithGoogle()}>SignIn With Google</button>
          <hr />
          <p className="m-2 mt-3 small" style={{ color: "white" }}>
            &copy; copyright 2023 All Right Reserved | Green Point
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminAuth;
