import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./GreenCoin/Pages/Nav";
import UserAuth from "./GreenCoin/Pages/UserAuth";
import Store from "./GreenCoin/Pages/Store";
import MainGreenCoin from "./GreenCoin/Pages/MainGreenPoint";
import UploadProducts from "./GreenCoin/GreenPointAdmin/UploadProducts";
import GreenAdminAuth from "./GreenCoin/GreenPointAdmin/GreenAdminAuth";
import OrderConfirmation from "./GreenCoin/Pages/OrderConfirmation";
import SeeOrderedProducts from "./GreenCoin/GreenPointAdmin/SeeOrderedProducts";
import Path from "./GreenCoin/GreenPointAdmin/Path";
import PageNotFounD from "./GreenCoin/Pages/PageNotFound";
import SecretRefCode from './GreenCoin/GreenPointAdmin/SecretRefCode';
import OrderForm from './GreenCoin/Pages/OrderForm';
import InsuffientPoint from './GreenCoin/Pages/InsuffientPoint';
import CheckoutPage from './GreenCoin/Pages/CheckoutPage';
import { UseSelector, useSelector } from 'react-redux';


function App() {

  const AuthenticateAdmins = useSelector( (state) => state.auth.value);
  
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={ <UserAuth />} />
        <Route path="/MainGreenHome" element={ localStorage.getItem("USERNAMEOFGREENCOIN") ? <Nav /> : <UserAuth />} />
        <Route path="/Store" element={ localStorage.getItem("USERNAMEOFGREENCOIN") ? <Store /> : <UserAuth /> }/>
        <Route path="/CheckoutPage" element={ <CheckoutPage /> }/>

        <Route path="/GreenPointAdmins" element={<GreenAdminAuth />} />
        <Route path="/SecretRefCode" element={<SecretRefCode />} />
        
        <Route path="/SeeOrder" element={ AuthenticateAdmins ? <SeeOrderedProducts /> : <GreenAdminAuth />} />
        <Route path="/GreenPointUploadProductsPage" element={ AuthenticateAdmins ? <UploadProducts /> : <GreenAdminAuth />}/>
        <Route path="/Path" element={ AuthenticateAdmins ? <Path /> : <GreenAdminAuth /> } />

        <Route path="/OrderDetails" element={ <OrderForm /> } />
        <Route path="/InsuffientFunds" element={<InsuffientPoint />} />
        <Route path="/OrderConfirmation" element={<OrderConfirmation />} />
        <Route path="*" element={<PageNotFounD />} />

      </Routes>
    </div>
  );
}

export default App;
