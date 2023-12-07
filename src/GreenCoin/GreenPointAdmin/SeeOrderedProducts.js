import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { db } from '../Pages/F1';
import { getDocs , collection , doc , deleteDoc } from 'firebase/firestore';

function SeeOrderedProducts() {
  
  const [OrderDetail , setOrderDetail] = useState([]);

  useEffect( () => {
    console.log(OrderDetail);
  },[])

  const DBRef = collection(db , "ProductPoint");

  useEffect( () => {
    const UserOrderDetail = async () => {
      try{
        const data = await getDocs(DBRef);
        const FilteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        setOrderDetail(FilteredData);
        console.log(FilteredData);
      }catch(err){
        alert(err.name)
        alert(err.message)
      }
    }
    UserOrderDetail();
  }, []);

  // refresh the page every 5 sec to see new order
  const RefreshZPage = () => {
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  }

  // to delete the order
  // to delete the item you should have the id
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "ProductPoint", id))
    .then( (result) => {
      alert(" successfully deleted !")
      window.location.reload();
    }).catch( (err) => {
      alert(err.name)
      alert(err.code)
      alert(err.message)
    })
  }

  // to confirm the order
  const handleConfirm = async () => {
    
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
            <Link to="/GreenPointAdmins" className="navbar-brand" style={{ color: "green" }}>
              &nbsp;
              <i className="fa fa-pagelines fa-2x" />
              &nbsp;GreenPoint
            </Link>
          </div>
          <div className="rightNav">
            <Link to="">
              <button
                className="text-light btn btn-dar m-1"
                style={{ backgroundColor: "none" }}
                onClick={ () => window.location.reload()}
              >
                <i className="fa fa-refresh text-success fa-2x" />
                &nbsp;&nbsp;
              </button>
            </Link>
            <button className="btn btn-outline-secondary">Contact Us</button>
          </div>
        </div>
      </nav>

      {/* to refresh the page */}
      <div className="row">
        <div className="col-md-10 mx-auto my-3">
           <button className="btn btn-success w-100 mx-2" onClick={RefreshZPage}> Refresh To See New Order</button>
        </div>
      </div>
      
      <table className="table table-bordered table-striped table-hover text-light">
        <thead className="text-lead">
          <tr>
            <th>S.N</th>
            <th>Name</th>
            <th>Phone No</th>
            <th>Block No</th>
            <th>Dorm No</th>
            <th>Order Item</th>
            <th>Actions</th>
          </tr>
        </thead>
        {OrderDetail && OrderDetail.map( (Details , index) => (
        <tbody>
          <tr>
         
            <>
            <td>{index}</td>
            <td><p>{Details.CFullName}</p></td>
            <td><p>{Details.CPhoneNumber}</p></td>
            <td><p>{Details.Block}</p></td>
            <td><p>{Details.Dorm}</p></td>
            <td><p>{Details.OrderItem.join(" , ")}</p></td>
            <div className="actions">
              <button className="btn btn-danger mx-3 my-2" onClick={ () => handleDelete(Details.id)}>Delete</button>
              <button className="btn btn-success" onClick={handleConfirm}>Confirm</button>
            </div>
            </>
          </tr>
        </tbody>
        ))}
      </table>
    </>
  );
}

export default SeeOrderedProducts;
