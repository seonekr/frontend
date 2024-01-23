import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
          <Route path="/productDetails" Component={ProductDetails} />
          <Route path="/cart" Component={Cart} />
          <Route path="/successfulBuy" Component={SuccessfulBuy} />
          <Route path="/address" Component={Address} />
          <Route path="/payment" Component={Payment} />
          <Route path="/order" Component={Order} />
          <Route path="/bill" Component={Bill} />


          {/* --------- Seller ---------- */}
          <Route path="/stores" Component={Stores} />
          <Route path="/store_management" Component={Store_management} />
          <Route path="/addProduct" Component={AddProduct} />
          <Route path="/editProduct" Component={EditProduct} />
          <Route path="/eviewStore" Component={ReviewStore} />
          <Route path="/payment_store" Component={Payment_store} />
          <Route path="/addPaymentStore" Component={AddPaymentStore} />
          <Route path="/dashboard_seller" Component={Dashboard_seller} />
          <Route path="/orderStore" Component={OrderStore} />
          <Route path="/billStore" Component={BillStore} />
        </Routes>
      </Router>
    </>
  );
}
export default App;