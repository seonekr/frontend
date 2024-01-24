import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./app.css";

//------ Login-SignUp Page ------//
import LoginUser from "./components/loginAndSignup/LoginUser";
import RegisterUser from "./components/loginAndSignup/RegisterUser";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import UserRegister from "./components/userRegister/UserRegister";
import SellerRegister from "./components/sellerRegister/SellerRegister";
import SigupGoogle from "./components/sigupforGoogle/SigupGoogle";
import AdditionalSeller from "./components/additionalSeller/AdditionalSeller";

//------ Profile Page ------//
import ProfileEdit from './components/profile/ProfileEdit';
import Profile from './components/profile/Profile';
import SellerEdit from './components/sellerRegister/SellerEdit';
import Terms from './components/termsandprivacy/Terms';
import Privacy from './components/termsandprivacy/Privacy';
import More from "./components/more/More";

//------ Home Page ------//
import Home from "./components/homePage/HomePage";
import ProductDetails from "./components/products/ProductDetails";
import Cart from "./components/cart/Cart";
import SuccessfulBuy from "./components/cart/SuccessfulBuy";
import Chats from "./components/chat/Chats";
import Chat_Details from "./components/chat/Chat_Details";
import Address from "./components/cart/Address";
import Payment from "./components/cart/Payment";
import Order from "./components/order/Order";
import Bill from "./components/order/Bill";

//------ Seller ------//
import Stores from "./components/seller/stores/Store";
import Store_management from "./components/seller/store_management/Store_management";
import AddProduct from "./components/seller/addProduct/AddProduct";
import EditProduct from "./components/seller/editProduct/EditProduct";
import ReviewStore from "./components/seller/reviewStore/ReviewStore";
import Payment_store from "./components/seller/payment_store/PaymentStore";
import AddPaymentStore from "./components/seller/payment_store/AddPaymentStore";
import Dashboard_seller from "./components/seller/stores/Dashboard_seller";
import OrderStore from "./components/seller/orderStore/OrderStore";
import BillStore from "./components/seller/orderStore/BillStore";

//------ Admin ------//
import Dashboard from "./admin/Dashboard";


function App() {
  return (
    <>
      <Router>
        <Routes>

          {/* --------- Login-Signup page---------- */}
          <Route path="/loginuser" Component={LoginUser} />
          <Route path="/registeruser" Component={RegisterUser} />
          <Route path="/forgotpassword" Component={ForgotPassword} />
          <Route path="/userregister" Component={UserRegister} />
          <Route path="/sellerregister" Component={SellerRegister} />
          <Route path="/sigupgoogle" Component={SigupGoogle} />
          <Route path="/additionalseller" Component={AdditionalSeller} />

          {/* --------- Profile page---------- */}
          <Route path="/profileedit" Component={ProfileEdit} />
          <Route path="/profile" Component={Profile} />
          <Route path="/selleredit" Component={SellerEdit} />
          <Route path="/more" Component={More} />
          <Route path="/terms" Component={Terms} />
          <Route path="/privacy" Component={Privacy} />

          {/* --------- Home Page ---------- */}
          <Route path="/" Component={Home} />
          <Route path="/product-details" Component={ProductDetails} />
          <Route path="/cart" Component={Cart} />
          <Route path="/successfulbuy" Component={SuccessfulBuy} />
          <Route path="/address" Component={Address} />
          <Route path="/chats" Component={Chats} />
          <Route path="/chat-details" Component={Chat_Details} />
          <Route path="/payment" Component={Payment} />
          <Route path="/order" Component={Order} />
          <Route path="/bill" Component={Bill} />


          {/* --------- Seller ---------- */}
          <Route path="/stores" Component={Stores} />
          <Route path="/store-management" Component={Store_management} />
          <Route path="/add-product" Component={AddProduct} />
          <Route path="/edit-product" Component={EditProduct} />
          <Route path="/eview-store" Component={ReviewStore} />
          <Route path="/payment-store" Component={Payment_store} />
          <Route path="/add-payment-store" Component={AddPaymentStore} />
          <Route path="/dashboard-seller" Component={Dashboard_seller} />
          <Route path="/order-store" Component={OrderStore} />
          <Route path="/bill-store" Component={BillStore} />


          {/* --------- Seller ---------- */}
          <Route path="/dashboard-admin" Component={Dashboard} />


        </Routes>
      </Router>
    </>
  );
}
export default App;