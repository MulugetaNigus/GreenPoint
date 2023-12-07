import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom';

import { db } from '../Pages/F1';
import { getDocs , addDoc , collection , doc } from 'firebase/firestore';

function UploadProducts() {

    const [ImgUrl , setImgUrl] = useState("");
    const [ProductName , setProductName] = useState("");
    const [ProductPoint , setProductPoint] = useState("");
    const [UploadingState , setUploadingState] = useState(false);

    const [addFoodCatagory , setAddFoodCatagory] = useState("");
    const [addOthersCatagory , setAddOthersCatagory] = useState("");
    const [addDrinkCatagory , setAddDrinkCatagory] = useState("");

    const [Catagory , setCatagory] = useState("Foods");

    const collectionRef = collection(db , `${Catagory}`);
    const handleAddProducts = async (e) => {
      try{
        e.preventDefault();
        setUploadingState(true);
        await addDoc(collectionRef , { ProductUrl: ImgUrl , ProductName:  ProductName , ProductPoint: ProductPoint });
        alert("Successfully Uploaded !");
        window.location.reload();
      }catch(err){
        alert(err.name)
        alert(err.message)
      }
        // setTimeout( () => {
            // try{
              
                // setUploadingState(false);

                // const UserData = {
                //     name: ProductName,
                //     imgUrl: ImgUrl,
                //     productPoint: ProductPoint
                // }

                // console.log(UserData);

                //firestore code here
            //     fetch(
            //       "https://store-a7cb8-default-rtdb.firebaseio.com/Storage.json" , {
            //       method: 'POST',
            //       body: JSON.stringify(UserData),
            //       headers: {
            //           "Content-Type" : "application/json"
            //       }
            //   }).then ( () => {
            //     alert("success");
            //     window.location.reload();
            //   })
            // }catch(err){
            //     alert("Error Name: " + err.name)
            //     alert("Error Message: " + err.message)
            // }  
        // }, 5000)
    }

  return (
    <>
      <nav
        className="navbar navbar-light bg-lighter"
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
              to="/GreenPointAdmins"
              style={{ color: "green" }}
            >
              <i className="fa fa-pagelines fa-2x" style={{ color: "green" }} />
              &nbsp;GreenPoint
            </Link>
          </div>
          <div className="rightNav">
            <button
              className="btn btn- text-success"
              style={{ backgroundColor: "whit" }}
              onClick={ () => window.location.reload()}
            >
              <i className="fa fa-refresh px-3 p-2" />
            </button>
          </div>
        </div>
      </nav>

      <div className="row">
        <div className="col-md-12">
          <p className="text-success fw-lighter mt-5 fs-1">
      <i className="fa fa-upload fa-1x" />&nbsp;Uploading Products To Our Store :)
          </p>
        </div>
      </div>
    <form onSubmit={(e) => handleAddProducts(e)}>
      <div className="row m-2">
        <div className="col-md-6 mx-auto border border-lighter shadow p-3 rounded">
        <label
            htmlFor="ProductImage"
            className="text-success opacity-75 ms-1 mb-1"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
            }}
          >
            Select The Catagories <span className="text-danger mx-2 fw-bold">*</span><br />
            <small>By Default Your Item Will Be Uploaded As Foods Item !</small>
          </label>
          <select name="catagory" id="catagory" className="form-select bg-danger bg-opacity-25" onChange={ (change) => setCatagory(change.target.value)} required>
            <option value="Select The Catagory" selected disabled>Select The Catagory</option>
            <option value="Foods">Foods</option>
            <option value="Drinks">Drinks</option>
            <option value="Others">Others</option>
          </select>
          <label
            htmlFor="ProductImage"
            className="text-success opacity-75 ms-1 mb-1"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
            }}
          >
            Product Image Url <span className="text-danger ms-2 fw-bold">*</span>
          </label>
          <input
            type="url"
            className="form-control form-control-lg bg-danger bg-opacity-25"
            placeholder="Product Image Url"
            onChange={ (event) => {setImgUrl(event.target.value)}}
            required
          />
          <label
            htmlFor="ProductName"
            className="text-success opacity-75 ms-1 my-1"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
            }}
          >
            Product Name <span className="text-danger ms-2 fw-bold">*</span>
          </label>
          <input
            type="text"
            className="form-control form-control-lg bg-danger bg-opacity-25"
            placeholder="Product Name"
            onChange={ (event) => {setProductName(event.target.value)}}
            required
          />
          <label
            htmlFor="ProductPoint"
            className="text-success opacity-75 ms-1 my-1"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
            }}
          >
            Product Point <span className="text-danger ms-2 fw-bold">*</span>
          </label>
          <input
            type="number"
            className="form-control form-control-lg bg-danger bg-opacity-25"
            placeholder="Product Point"
            onChange={ (event) => {setProductPoint(event.target.value)}}
            required
          />
          <br />
          <button type="submit" className="btn btn-outline-success p-2 w-100">{UploadingState ? "Uploading Products..." : "Add Product" }</button>
        </div>
      </div>
    </form>
    <p className="m-2 mt-5 small" style={{ color: "#d900ff" }}>
            &copy; copyright 2023 All Right Reserved | Green Point
          </p>
    </>
  );
}

export default UploadProducts;
